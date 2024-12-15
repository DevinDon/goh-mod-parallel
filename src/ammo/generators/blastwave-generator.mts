import { toFixed } from '../../utils/formatter.mjs';
import { iline, ilines } from '../../utils/set-indent.mjs';
import { type AmmoOptions } from '../options.mjs';

export type BlastwaveOptions = Pick<AmmoOptions, 'type' | 'caliber' | 'speed' | 'mass' | 'fill'>;

/**
 * 动能接触伤害，拟合函数 `y=0.001\cdot\left(\frac{mx^{2}}{d}\right)^{\frac{1}{3}}`
 *
 * y 为动能接触伤害，m 为炮弹质量，v 为炮弹速度，d 为口径单位 m
 */
const calcKineticContactEnergy = (m: number, v: number, d: number) => (
  0.001 * Math.pow(m * Math.pow(v, 2) / d, 1 / 3)
);

/**
 * 爆炸接触伤害，拟合函数 `y=10\cdot\log_{10}\left(x+1\right)+\left(4\cdot x\right)^{\frac{1}{2}}`
 *
 * y 为爆炸接触伤害，m 为炮弹质量
 */
const calcExplosiveContactEnergy = (m: number) => (
  10 * Math.log10(m + 1) + 1.5 * Math.pow(4 * m, 1 / 2)
);

const KineticShellType = [
  'ap',
  'apbc',
  'apc',
  'apcbc',
  'apcbche',
  'apche',
  'apcr',
  'apds',
  'aphe',
  'aphebc',
  'hvap',
] as const;

/**
 * 爆炸冲击波伤害计算
 *
 * - 冲击波分两类，爆炸冲击波和动能冲击波，两种冲击波都会产生接触伤害和破片伤害
 * - 对于高爆弹种，冲击波主要由爆炸产生
 * - 对于穿甲弹种，冲击波主要由动能产生
 * - energy 的值在 5 以上就会对中型以上装甲单位造成损伤
 * - energy 的值在 10 以上就会对重型以上装甲单位造成损伤
 */
export const generateBlastwave = ({ type, caliber, speed, mass, fill = 0 }: BlastwaveOptions) => {

  const shellHeadMass = mass * 0.4;
  const caliberInM = caliber / 1000;

  /** 动能冲击系数，高爆弹种为 0.1，穿甲弹种为 1 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const kineticCoefficient = KineticShellType.includes(type as any) ? 1 : 0.1;

  /** 动能接触伤害 */
  const kineticContactEnergy = kineticCoefficient * calcKineticContactEnergy(shellHeadMass, speed, caliberInM);

  /** 动能破片伤害 */
  const kineticFragmentEnergy = kineticContactEnergy > 1
    ? Math.pow(kineticContactEnergy, 1 / 1.5) / 1
    : Math.pow(kineticContactEnergy, 1.5);

  /** 动能冲击波伤害 */
  const kineticBlastwaveEnergy = kineticContactEnergy > 1
    ? Math.pow(kineticContactEnergy, 1 / 2) / 2
    : Math.pow(kineticContactEnergy, 2);

  /** 爆炸接触伤害 */
  const explosiveContactEnergy = calcExplosiveContactEnergy(fill);

  /** 爆炸破片伤害 */
  const explosiveFragmentEnergy = explosiveContactEnergy > 1
    ? Math.pow(explosiveContactEnergy, 1 / 1.5) / 1
    : Math.pow(explosiveContactEnergy, 1.5);

  /** 爆炸冲击波伤害 */
  const explosiveBlastwaveEnergy = explosiveContactEnergy > 1
    ? Math.pow(explosiveContactEnergy, 1 / 2) / 2
    : Math.pow(explosiveContactEnergy, 2);

  /** 接触伤害 */
  const contactEnergy = Math.max(0.01, kineticContactEnergy + explosiveContactEnergy);

  /** 接触伤害衰减影响半径 */
  const contactRadius = 0.1 + Math.pow(caliber, 1 / 2) / 10;

  /** 破片伤害 */
  const fragmentEnergy = Math.max(0.01, kineticFragmentEnergy + explosiveFragmentEnergy);

  /** 破片衰减影响半径 */
  const fragmentRadius = 1 + Math.pow(fragmentEnergy, 2) * 2;

  /** 冲击波伤害 */
  const blastwaveEnergy = Math.max(0.01, kineticBlastwaveEnergy + explosiveBlastwaveEnergy);

  /** 冲击波衰减影响半径 */
  const blastwaveRadius = 2 + Math.pow(blastwaveEnergy, 3) * 10;

  return ilines(
    iline(0, '{damage blastwave'),
    iline(2, `{energy ${toFixed(contactEnergy)}} ; 接触伤害`),
    iline(2, `{area ${toFixed(contactRadius / 10)} ${toFixed(contactRadius)}} ; 衰减影响半径，极限影响半径`),
    iline(2, `{ground_interaction_radius ${toFixed(contactRadius)}} ; 弹坑效果半径`),
    iline(0, '}'),
    iline(0, '{damage add blastwave'),
    iline(2, `{energy ${toFixed(fragmentEnergy)}} ; 破片伤害`),
    iline(2, `{area ${toFixed(fragmentRadius / 10)} ${toFixed(fragmentRadius)}} ; 衰减影响半径，极限影响半径`),
    iline(2, '{ground_interaction_radius 0} ; 弹坑效果半径'),
    iline(0, '}'),
    iline(0, '{damage add blastwave'),
    iline(2, `{energy ${toFixed(blastwaveEnergy)}} ; 冲击波伤害`),
    iline(2, `{area ${toFixed(blastwaveRadius / 10)} ${toFixed(blastwaveRadius)}} ; 衰减影响半径，极限影响半径`),
    iline(2, '{ground_interaction_radius 0} ; 弹坑效果半径'),
    iline(0, '}'),
  );

};
