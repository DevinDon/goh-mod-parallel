/** 行走装置类型 */
export type WalkingDeviceType = 'tire' | 'half-track' | 'track';

/** 转换 km/h 为 m/s */
export const toMetersPerSecond = (kmPerHour: number) => kmPerHour * 1000 / 3600;

/** 加速时间计算选项 */
export type StartTimeOptions = {
  /** 质量，单位 kg */
  mass: number;
  /** 速度，单位 m/s */
  speed: number;
  /** 功率，单位 kW */
  power: number;
  /** 性能系数，取值范围为 [0.5, 2]，数字越大性能越好，1 为标准性能 */
  performance?: number;
};

/**
 * 计算前进或倒退所需的加速时间
 *
 * `t = (1/2 * m * v^2 / p) / performance`
 */
export const calcStartTime = (options: StartTimeOptions) => {

  const { mass, speed, power, performance = 1 } = options;

  /** 功率，单位 J/s */
  const p = power * 745.7;
  /** 能量，单位 J */
  const e = 0.5 * mass * speed * speed;
  /** 做功时间，单位 s */
  const t = e / p / performance;

  return t;

};

/** 摩擦系数 */
export type Friction = typeof Friction[keyof typeof Friction];
export const Friction = {
  /** 轮胎的动摩擦 */
  tire: 0.1,
  /** 轮胎的静摩擦 */
  tireStatic: 0.8,
  /** 半履带的动摩擦 */
  halfTrack: 0.2,
  /** 半履带的静摩擦 */
  halfTrackStatic: 0.7,
  /** 全履带的动摩擦 */
  track: 0.3,
  /** 全履带的静摩擦 */
  trackStatic: 0.6,
} as const;

/** 减速时间计算选项 */
export type StopTimeOptions = {
  /** 速度，单位 m/s */
  speed: number;
  /**
   * 摩擦系数
   *
   * 建议轮胎的动摩擦为 0.1，静摩擦为 0.8
   *
   * 建议履带的动摩擦为 0.3，静摩擦为 0.6
   */
  friction: Friction;
  /** 性能系数，取值范围为 [0.5, 2]，数字越大性能越好，1 为标准性能 */
  performance?: number;
};

/**
 * 计算减速时间
 *
 * 最大速度除以摩擦力加速度
 *
 * `t = (v / (f * 9.8)) / performance`
 */
export const calcStopTime = (options: StopTimeOptions) => {

  const { speed, friction, performance = 1 } = options;

  /** 减速时间，单位 s */
  const t = speed / (friction * 9.8) / performance;

  return t;

};

/** 双流传动原地旋转一周所用的时间计算选项 */
export type TurnTimeOptions = {
  /** 速度，单位 m/s */
  speed: number;
  /** 轴距，单位 m */
  distance: number;
  /** 功率，单位 kW */
  power: number;
  /** 重量，单位 kg */
  mass: number;
  /** 性能系数，取值范围为 [0.5, 2]，数字越大性能越好，1 为标准性能 */
  performance?: number;
};

/**
 * 计算双流传动原地旋转一周所用的时间
 *
 * `t = PI * d / v / p`
 *
 * d 为轴距，单位 m
 * v 为速度，单位 m/s
 * p 为功重比系数
 */
export const calcTurnTime = (options: TurnTimeOptions) => {

  const { speed, distance, power, mass, performance = 1 } = options;

  /** 旋转时间，单位 s */
  const t = Math.PI * distance / speed / Math.pow(power / mass, 1 / 4) / performance;

  return t;

};
