import { i0lines, i2lines } from '../../../utils/formatter.mjs';

/** 运动精度 */
export type AccuracyByMotion = {
  /** 最大线性速度，单位：km/h */
  maxLinearSpeed: number;
  /** 线性速度系数，单位：km/h */
  byLinearSpeed: number;
  /** 最大角速度，单位：deg/s */
  maxAngularSpeed: number;
  /** 角速度系数，单位：deg/s */
  byAngularSpeed: number;
  /** 混乱时间，单位：s */
  disorderTime: number;
  /** 命令时间，单位：s */
  orderTime: number;
};

/** 运动精度预设 */
export const AccuracyByMotionPresets = {
  gun: {
    maxLinearSpeed: 7.00,
    byLinearSpeed: 0.25,
    maxAngularSpeed: 3.00,
    byAngularSpeed: 0.35,
    disorderTime: 0.25,
    orderTime: 2.00,
  },
  mgun: {
    maxLinearSpeed: 8.00,
    byLinearSpeed: 0.40,
    maxAngularSpeed: 30.00,
    byAngularSpeed: 0.50,
    disorderTime: 0.60,
    orderTime: 0.75,
  },
  hmgun: {
    maxLinearSpeed: 9.00,
    byLinearSpeed: 0.30,
    maxAngularSpeed: 25.00,
    byAngularSpeed: 0.40,
    disorderTime: 0.45,
    orderTime: 1.25,
  },
} as const;

/** 武器配置 */
export type Weapon = {
  /** 武器位置 */
  place: string;
  /** 武器类型 */
  type?: 'main' | 'coaxial' | 'hull' | 'aa' | 'rear';
  /** 恢复 IK 后瞄准 */
  restoreIKAfterAim?: boolean;
  /** 是否需要旋转车体 */
  rotate?: boolean;
  /** 武器 */
  weapon: string;
  /** 装填内容 */
  filling: string;
  /** 装填数量 */
  amount: number;
  /** 绑定的开火点 */
  foresight?: string;
  /** 枪手 */
  gunner: string;
  /** 装填手 */
  charger: string;
  /** 链接骨骼 */
  linkBone?: string;
  /** 链接动画 */
  linkAnimation?: string;
  /** 基本配置 */
  basic: boolean;
  /** 在手动模式下 AI 参与 */
  aiInManual: boolean;
  /** 运动精度 */
  accuracyByMotion: AccuracyByMotion;
};

/** 武器配置列表 */
export type WeaponryOptions = {
  /** 恢复 IK 时间 */
  restoreIKTime?: number;
  /** 武器列表 */
  weapons: Weapon[];
  /** 武器射界限制 */
  limits?: {
    /** 绑定骨骼 */
    bone: string;
    /** 角度限制，单位：deg */
    limit?: { top: number; bottom: number } | { left: number; right: number };
    /** 速度限制，单位：deg/s */
    speed: number;
  }[];
};

/** 生成武器配置列表 */
export const generateWeaponry = (options: WeaponryOptions) => {

  const { restoreIKTime, weapons, limits = [] } = options;

  const weaponLines = weapons.map(
    weapon => i0lines(
      `{Place "${weapon.place}"`,
      `  ${weapon.type ? `{Type "${weapon.type}"}` : '; 无武器配置'}`,
      `  ${weapon.restoreIKAfterAim === true ? '{RestoreIKAfterAim}' : '; 无恢复 IK 后瞄准'}`,
      `  ${weapon.rotate === true ? '{Rotate}' : '; 无需旋转车体'}`,
      `  {Weapon "${weapon.weapon}" filling "${weapon.filling}" ${weapon.amount}}`,
      `  ${weapon.foresight ? `{foresight "${weapon.foresight}"}` : '; 无开火点'}`,
      `  {Gunner "${weapon.gunner}"}`,
      `  {Charger "${weapon.charger}"}`,
      `  ${weapon.linkBone ? `{LinkBone "${weapon.linkBone}"}` : '; 无链接骨骼'}`,
      `  ${weapon.linkAnimation ? `{LinkAnimation "${weapon.linkAnimation}"}` : '; 无链接动画'}`,
      `  ${weapon.basic === true ? '{basic}' : '; 无基本配置'}`,
      `  ${weapon.aiInManual === true ? '{ai_in_manual}' : '; 无 AI 参与'}`,
      '  {AccuracyByMotion',
      `    {MaxLinearSpeed ${weapon.accuracyByMotion.maxLinearSpeed}}`,
      `    {ByLinearSpeed ${weapon.accuracyByMotion.byLinearSpeed}}`,
      `    {MaxAngularSpeed ${weapon.accuracyByMotion.maxAngularSpeed}}`,
      `    {ByAngularSpeed ${weapon.accuracyByMotion.byAngularSpeed}}`,
      `    {DisorderTime ${weapon.accuracyByMotion.disorderTime}}`,
      `    {OrderTime ${weapon.accuracyByMotion.orderTime}}`,
      '  }',
      '}',
    ),
  );

  const limitsLines = limits.length > 0
    ? limits.map(
      item => {
        const { bone, limit, speed } = item;
        const limitLine = limit
          ? 'left' in limit
            ? `{limits ${limit.right} ${limit.left}}`
            : `{limits ${limit.bottom} ${limit.top}}`
          : '; 无角度限制';
        return i0lines(
          `{Bone "${bone}"`,
          `  ${limitLine}`,
          `  {speed2 ${speed}}`,
          '}',
        );
      },
    )
    : [ '; 无武器射界限制' ];

  return i0lines(
    '{Weaponry',
    `  ${restoreIKTime ? `{RestoreIKTime ${restoreIKTime}}` : '; 无恢复 IK 时间'}`,
    `  ${i2lines(...weaponLines)}`,
    '}',
    '',
    ...limitsLines,
  );

};
