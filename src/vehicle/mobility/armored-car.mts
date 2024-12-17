import { i0lines, toFixed } from '../../utils/formatter.mjs';
import { calcStartTime, calcStopTime, Friction, type WalkingDeviceType } from './shared.mjs';

/** 装甲车机动性 */
export type ArmoredCarMobilityOptions = {
  $options: 'armored-car-mobility';
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
  /** 行走装置类型，轮胎、半履带或履带，默认履带 */
  walkingDeviceType?: WalkingDeviceType;
  /** 燃料容量，单位 L */
  fuel: number;
};

/** 设置装甲车机动性 */
export const setMobilityOfArmoredCar = (options: ArmoredCarMobilityOptions) => {

  const { forward, reverse, power, mass, performance = 1, walkingDeviceType = 'track', fuel } = options;

  const friction = walkingDeviceType === 'tire'
    ? Friction.tire
    : walkingDeviceType === 'half-track'
      ? Friction.halfTrack
      : Friction.track;
  const frictionStatic = walkingDeviceType === 'tire'
    ? Friction.tireStatic
    : walkingDeviceType === 'half-track'
      ? Friction.halfTrackStatic
      : Friction.trackStatic;

  const startTime = calcStartTime({ mass, speed: forward, power, performance });
  const stopTime = calcStopTime({ speed: forward, friction, performance });
  const brakeTime = calcStopTime({ speed: forward, friction: frictionStatic, performance });

  return i0lines(
    '{Locomotion',
    '  {Slow              10}',
    `  {Normal            ${toFixed(forward)}}`,
    `  {Fast              ${toFixed(forward)}}`,
    `  {MaxSpeed          ${toFixed(forward)}}`,
    `  {MaxSpeedAtMaxTurn ${toFixed(forward / 2 * performance)}}`,
    `  {SteerOn           ${toFixed(performance * 10)}}`,
    `  {SteerOff          ${toFixed(performance * 20)}}`,
    `  {TurnRadius        ${toFixed(8.0 * performance)}}`,
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
