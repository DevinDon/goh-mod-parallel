import { toFixed } from '../../utils/formatter.mjs';
import { i0lines, i2lines } from '../../utils/set-indent.mjs';
import { type WeaponOptions } from '../options.mjs';
import { generateBulletParameter } from './bullet-parameter-generator.mjs';

/** 生成武器配置 */
export const generateWeapon = (options: WeaponOptions) => {

  const tagsLine = options.tags?.length
    ? `{Tag ${options.tags.map(tag => `"${tag}"`).join(' ')}} ; 标签`
    : '; 无标签';

  const entityLine = options.entity
    ? `{Entity "${options.entity}"}`
    : '; 无模型';

  const massLine = options.mass
    ? `{Mass ${toFixed(options.mass)}}`
    : '; 无重量';

  const curvedLine = options.curved === true ? '{Aimtype curved} ; 曲射模式' : '; 不启用曲射模式';

  const burstLines = options.burst
    ? i0lines(
      '{Burst',
      `  {Short ${options.burst.long.standard} ${options.burst.long.random}} ; 远距离短连发，基数 +- 随机数`,
      `  {Long  ${options.burst.short.standard} ${options.burst.short.random}} ; 近距离长连发，基数 +- 随机数`,
      `  {RangeKoef ${options.burst.rangeKoef}} ; 该系数乘以 AimRange = 分界距离，大于分界距离为远距离，小于分界距离为近距离`,
      '}',
    )
    : '; 无连发模式';

  const automaticLine = options.automatic === true ? '{Automatic} ; 自动武器' : '; 非自动武器';

  const bullets = options.bullets.map(generateBulletParameter);
  const bulletsLines = bullets.length > 0
    ? i0lines(...bullets)
    : '; 无炮弹模式';

  const extraLines = options.extra?.length
    ? i0lines(...options.extra)
    : '; 无额外配置';

  return i0lines(
    `; ${options.name}`,
    `; ${options.description}`,
    `{from "${options.from ?? 'pattern gun'}"`,
    '  (include "/properties/standard/gun/define.ext")',
    `  ${tagsLine}`,
    `  ${entityLine}`,
    `  ${massLine}`,
    `  {FireSound "${options.fireSound}"} ; 开火音效`,
    `  {FireSoundclose "${options.fireSoundClose}"} ; 车内视角开火音效`,
    `  {ReloadSound "${options.reloadSound}"} ; 装弹音效`,
    `  {Cursor "${options.cursor ?? 'ironsights/tank'}"} ; 即时战略模式下的瞄准图标`,
    `  {CursorReloading "${options.cursorReloading ?? 'carbine_reload'}"} ; 即时战略模式下的装填图标`,
    `  {Crosshair "${options.crosshair ?? 'crosshair_tank'}"} ; 直接操控模式下的第三人称瞄准图标`,
    `  {CrosshairReloading "${options.crosshairReloading ?? 'crosshair_tank_reload'}"} ; 直接操控模式下的第三人称装填图标`,
    `  {Filling "ammo ${options.ammo}" ${options.amout}} ; 弹种及弹链内炮弹数量`,
    `  {Calibre ${options.caliber}} ; 口径`,
    `  {SyncedProjectiles ${options.syncedProjectiles === true ? 1 : 0}} ; 生成弹坑, 0 为禁止, 1 为允许`,
    '  {Preloaded}',
    '  {ProjectileDamageThreshold 1} ; 小于该参数的伤害会被忽略',
    `  {UnlimitedRangeTPC ${(options.unlimitedRangeTPC ?? true) === true ? 1 : 0}} ; 直接操控模式下无视距离开火, 1 为允许, 0 为禁止`,
    `  {AimingTolerance ${options.aimingTolerance ?? 1}} ; 当瞄准偏离目标若干度时, 将限制 AI 将开火`,
    `  {SpreadTolerance ${(options.spreadTolerance ?? 0.5)}} ; 瞄准到一定精度就可以开火`,
    `  {ZeroingAccuracy ${(options.zeroingAccuracy ?? [ 0.95, 0.90, 0.85, 0.80, 0.75 ]).join(' ')}} ; 归零精度？不确定`,
    `  {LockFireDistanceTime ${options.lockFireDistanceTime ?? 3}} ; 超出射击距离后允许继续开火的时间`,
    `  {DisableRicochet ${(options.disableRicochet ?? false) === true ? 1 : 0}} ; 是否禁用跳弹模式`,
    `  ${curvedLine}`,
    `  {RechargeTime ${options.rechargeTime}} ; 装填时间（秒）`,
    `  {RecoveryTime ${toFixed(options.recoveryTime)}} ; 短射间隔（秒）, 适用于弹链`,
    '  {FiringTimeout 0.35 0.15} ; 电脑在两次射击之间的最小间隔，不确定参数含义',
    `  ${i2lines(burstLines)}`,
    `  ${i2lines(automaticLine)}`,
    `  ${i2lines(bulletsLines)}`,
    `  ${i2lines(extraLines)}`,
    '}',
    '',
  );

};
