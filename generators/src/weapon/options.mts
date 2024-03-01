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
  /** AI 最长射击距离 m */
  aimRange: number;
  /** 玩家最长射击距离 m */
  maxRange: number;
  /** 弹种速度 m/s */
  speed: number;
  /** 弹种重力 m/s，默认为 5，曲射模式推荐为 9 */
  gravity?: number;
  /** 穿深，可选，不适用于高爆弹种，会在 1000 m 处衰减为 0 */
  projectile?: {
    /** 最近距离穿深 100m */
    nearest: number;
    /** 最远距离穿深 500m */
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
      /** 最近距离散布 100m */
      nearest: number;
      /** 最远距离散布 500m */
      farthest: number;
      /** 系数，默认为 3.5 */
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
    short: {
      /** 标准射击次数 */
      standard: number;
      /** 随机增减 */
      random: number;
    };
    /** 近距离长连发 */
    long: {
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

};
