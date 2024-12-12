/** 炮弹类型对应的装填图标 */
export const BulletReloadingCursors = {
  ap: 'gun_ap',
  aphe: 'gun_aphe',
  apc: 'gun_apc',
  apche: 'gun_apc',
  apbc: 'gun_apbc',
  apbche: 'gun_apbc',
  apcbc: 'gun_apcbc',
  apcbche: 'gun_apcbc',
  apds: 'gun_apds',
  apcr: 'gun_apcr',
  hvap: 'gun_hvap',
  heat: 'gun_heat',
  he: 'gun_he',
  sm: 'gun_sm',
  wp: 'gun_wp',
  ic: 'gun_ic',
  api: 'gun_api',
  // 步枪弹
  clip: 'carbine_reload',
  magazine: 'carbine_reload',
} as const;

/** 炮弹类型 */
export type BulletType = keyof typeof BulletReloadingCursors;

/** 判断是否为支持的弹种类型 */
export const isSupportedBulletType = (type: string): type is BulletType => Object.keys(BulletReloadingCursors).includes(type);

/** 弹种配置 */
export type WeaponBulletOptions = {
  /** 弹种名称 */
  name: BulletType;
  /** 最短射击距离 m */
  minRange: number;
  /** AI 最长射击距离 m，默认为 (换算后的 `maxRange`) 的 1.95 次根 x 10 */
  aimRange?: number;
  /**
   * 极限有效射击距离 m，同时用于指定 farthest 距离，通过限制 `aimRange` 的值来控制 AI 的射击距离
   *
   * 轻武器建议设置为现实中的极限有效距离 1000m 以内，如 StG 44 为 400m
   *
   * 高射炮、坦克炮建议设置为 2000 ~ 3000m 范围内
   */
  maxRange: number;
  /** 有效精准射击距离 m，仅用于指定 nearest 距离，默认为 (换算后的 `aimRange`) / 5 */
  effectiveRange?: number;
  /** 弹种速度 m/s */
  speed: number;
  /** 弹种重力 m/s，默认为 5，曲射模式推荐为 9 */
  gravity?: number;
  /** 穿深，可选，不适用于高爆弹种，会在 1000 m 处衰减为 0 */
  projectile?: {
    /** EffectiveRange 处穿深 */
    nearest: number;
    /** AimRange 处穿深 */
    farthest: number;
  };
  /** 弹种对装甲的击穿伤害，可选 */
  damageToArmor?: number;
  /** 弹种对人员的击穿伤害，可选 */
  damageToHuman?: number;
  /** 弹种散布及精度 */
  spreading: {
    /** 散布 */
    radiusTable: {
      /** EffectiveRange 处散布 */
      nearest: number;
      /** AimRange 处散布 */
      farthest: number;
      /** 10000m 处散布系数，默认为 10，即 10000m 处的散布为 farthest 的 10 倍 */
      factor?: number;
    };
    /** 开火后恢复到正常精度的时间 s，默认 1 秒 */
    burstRecoveryTime?: number;
    /** 连续开火第一发的精度为 100%，值越低精度越低，默认值为 100 */
    burstAccuracy?: number;
    /** 炮弹落点与中心关系，大于 1 时炮弹落点会偏向中心，小于 1 时炮弹落点会远离中心，默认值为 1 */
    spreadPower?: number;
    /** 炮弹落点的横纵向比例，小于 1 时更偏向于纵向落点，大于 1 时更偏向于横向落点，默认为 0.75 */
    spreadXYRatio?: number;
  };
  /** 倾斜入射修正，见修正表 */
  overmatch?: string;
  /** 不确定，防空炮有该配置且为 0 */
  falloffStrength?: number;
};

/** 武器配置 */
export type WeaponOptions = {

  /** 要保存到的路径，相对于当前模组的根目录 */
  destination: string;

  /** 武器名称，用于文件名 */
  name: string;
  /** 武器描述，用于备注 */
  description: string;

  /** 继承自哪个武器或模板，默认为 `pattern gun` */
  from?: string;

  /** 标签，可选 */
  tags?: string[];

  /** 模型名称，可选 */
  entity?: string;
  /** 质量，可选 */
  mass?: number;

  /** 开火音效 */
  fireSound: string;
  /** 车内视角开火音效 */
  fireSoundClose: string;
  /** 装弹音效 */
  reloadSound: string;
  /** 即时战略模式下的瞄准图标，默认 `ironsights/tank` */
  cursor?: 'ironsights/aa'
  | 'ironsights/bazooka'
  | 'ironsights/binoculars'
  | 'ironsights/mg'
  | 'ironsights/mortar'
  | 'ironsights/grenade'
  | 'ironsights/rifle'
  | 'ironsights/shotgun'
  | 'ironsights/smg'
  | 'ironsights/tank'
  | 'ironsights/tank2';
  /** 即时战略模式下的装填图标，默认 `carbine_reload` */
  cursorReloading?: string;
  /** 直接操控模式下的第三人称瞄准图标，默认 `crosshair_tank` */
  crosshair?: string;
  /** 直接操控模式下的第三人称装填图标，默认 `crosshair_tank_reload` */
  crosshairReloading?: string;

  /** 装填炮弹类型 */
  ammo: string;
  /** 弹链内炮弹数量 */
  amout: number;
  /** 口径 mm */
  calibre: number;
  /** 是否生成弹坑 */
  syncedProjectiles: boolean;

  /** 直接操控模式下无视距离开火，默认允许 */
  unlimitedRangeTPC?: boolean;
  /** 瞄准偏离目标若干度时, 将限制 AI 将开火，默认 1 度 */
  aimingTolerance?: number;
  /** 瞄准到多少精度就可以开火，默认 0.5 */
  spreadTolerance?: number;
  /** 归零精度？默认 `[0.95, 0.90, 0.85, 0.80, 0.75]` */
  zeroingAccuracy?: number[];
  /** 超出射击距离后允许继续开火的时间，默认 3 秒 */
  lockFireDistanceTime?: number;
  /** 是否禁用跳弹模式，默认不禁用 */
  disableRicochet?: boolean;
  /** 是否使用曲射模式，默认不使用 */
  curved?: boolean;

  /** 装填时间 s */
  rechargeTime: number;
  /** 短射间隔 s, 适用于弹链 */
  recoveryTime: number;

  /** 是否为自动武器，默认是 */
  automatic?: boolean;

  /** 点射模式配置 */
  burst?: {
    /** 远距离短连发 */
    'short': {
      /** 标准射击次数 */
      standard: number;
      /** 随机增减 */
      random: number;
    };
    /** 近距离长连发 */
    'long': {
      /** 标准射击次数 */
      standard: number;
      /** 随机增减 */
      random: number;
    };
    /** 该系数乘以 AimRange = 分界距离，大于分界距离为远距离，小于分界距离为近距离 */
    rangeKoef: number;
  };

  /** 弹种配置 */
  bullets: WeaponBulletOptions[];

  /** 额外的自定义参数，需要包含花括号或大括号，一项为一行 */
  extra?: string[];

};
