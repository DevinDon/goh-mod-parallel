import { i0lines, toFixed } from '../../utils/formatter.mjs';
import { calcStartTime, calcStopTime, calcTurnTime, Friction, toMetersPerSecond } from './shared.mjs';

/** 坦克机动性 */
export type TankMobilityOptions = {
  $options: 'tank-mobility';
  /** 前进速度，单位 km/h */
  forward: number;
  /** 后退速度，单位 km/h */
  reverse: number;
  /** 质量，单位 kg */
  mass: number;
  /** 功率，单位 hp */
  power: number;
  /** 性能系数，取值范围为 [0.5, 2]，数字越大性能越好，1 为标准性能 */
  performance?: number;
  /** 燃料容量，单位 L */
  fuel: number;
};

/** 设置坦克机动性 */
export const setMobilityOfTank = (options: TankMobilityOptions) => {

  const { forward, reverse, power, mass, performance = 1, fuel } = options;

  const turnStartTime = calcStartTime({ mass, speed: toMetersPerSecond(reverse), power, performance });
  const turnStopTime = calcStopTime({ speed: toMetersPerSecond(reverse), friction: Friction.trackStatic, performance });
  const turnTime = calcTurnTime({ speed: toMetersPerSecond(reverse), distance: 3, power, mass, performance });

  const startTime = calcStartTime({ mass, speed: toMetersPerSecond(forward), power, performance });
  const stopTime = calcStopTime({ speed: toMetersPerSecond(forward), friction: Friction.track, performance });
  const brakeTime = calcStopTime({ speed: toMetersPerSecond(forward), friction: Friction.trackStatic, performance });

  return i0lines(
    '{Locomotion',
    '  {Slow              10}',
    `  {Normal            ${toFixed(forward)}}`,
    `  {Fast              ${toFixed(forward)}}`,
    `  {MaxSpeed          ${toFixed(forward)}}`,
    `  {MaxSpeedAtMaxTurn ${toFixed(forward / 2 * performance)}}`,
    `  {TurnTime          ${toFixed(turnTime)}}`,
    `  {TurnStart         ${toFixed(turnStartTime)}}`,
    `  {TurnStop          ${toFixed(turnStopTime)}}`,
    `  {TurnRadius        ${toFixed(5.0 * performance)}}`,
    `  {StartTime         ${toFixed(startTime)}}`,
    `  {StopTime          ${toFixed(stopTime)}}`,
    `  {BrakeTime         ${toFixed(brakeTime)}}`,
    '  {Gears             0.5 1.0}',
    `  {RearGears         ${toFixed(reverse / forward)}}`,
    `  {GearSwitchDelay   ${toFixed(0.3 / performance)}}`,
    '  {SplineRadius      0.45}',
    '  {MaxSlope          75}',
    '  {FallSlope         75}',
    '}',
    '{FuelBag',
    `  {Volume            ${toFixed(fuel)}}`,
    `  {Rate              ${toFixed(power / 25 + mass / 20000)}}`,
    `  {Remain            ${toFixed(fuel)}}`,
    '  {Fuel              "fuel"}',
    '}',
  );

};
