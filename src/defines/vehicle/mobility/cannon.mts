import { i0lines, toFixed } from '../../../utils/formatter.mjs';
import { calcStartTime, calcStopTime, Friction } from './shared.mjs';

/** 牵引式火炮机动性 */
export type CannonMobilityOptions = {
  $options: 'cannon-mobility';
  /** 前进速度，单位 km/h */
  forward: number;
  /** 后退速度，单位 km/h */
  reverse: number;
  /** 质量，单位 kg */
  mass: number;
  /** 性能系数，取值范围为 [0.5, 2]，数字越大性能越好，1 为标准性能 */
  performance?: number;
};

/** 设置牵引式火炮机动性 */
export const setMobilityOfCannon = (options: CannonMobilityOptions) => {

  const { forward, reverse, mass, performance = 1 } = options;

  // 认为人的推力能产生 1hp 的功率
  const startTime = calcStartTime({ mass, speed: forward, power: 1 * 2, performance });
  const stopTime = calcStopTime({ speed: forward, friction: Friction.tire, performance });
  const brakeTime = calcStopTime({ speed: forward, friction: Friction.tireStatic, performance });

  return i0lines(
    '{Locomotion',
    '  {Slow       10}',
    `  {Normal     ${toFixed(forward)}`,
    `  {Fast       ${toFixed(forward)}`,
    `  {MaxSpeed   ${toFixed(forward)}`,
    `  {TurnTime   ${toFixed((mass / 500 + forward / 100 - 4) / performance)}`,
    `  {TurnStart  ${toFixed((0.65 + mass / 1500) / performance)}`,
    `  {TurnRadius ${toFixed((2 + mass / 5000) / performance)}`,
    `  {TurnStop   ${toFixed((0.65 + mass / 2500) / performance)}`,
    `  {StartTime  ${toFixed(startTime)}`,
    `  {StopTime   ${toFixed(stopTime)}`,
    `  {BrakeTime  ${toFixed(brakeTime)}`,
    '  {Gears      0.5 1.0}',
    `  {RearGears  ${toFixed(reverse / forward)}}`,
    '  {MaxSlope   60}',
    '  {FallSlope  70}',
    '}',
  );

};
