import { setIndent } from '../../utils/set-indent.mjs';
import { type WeaponOptions } from '../options.mjs';
import { generateBulletParameter } from './bullet-parameter-generator.mjs';

/** 生成武器配置 */
export const generateWeapon = (options: WeaponOptions) => {

  const curved = options.curved === true ? '{Aimtype curved} ; 曲射模式' : '; 不启用曲射模式';

  const burst = options.burst
    ? `{Burst
    {Short ${options.burst.long.standard} ${options.burst.long.random}} ; 远距离短连发，基数 +- 随机数
    {Long  ${options.burst.short.standard} ${options.burst.short.random}} ; 近距离长连发，基数 +- 随机数
    {RangeKoef ${options.burst.rangeKoef}} ; 该系数乘以 AimRange = 分界距离，大于分界距离为远距离，小于分界距离为近距离
  }`
    : '; 无连发模式';

  const automatic = options.automatic === true ? '{Automatic} ; 自动武器' : '; 非自动武器';

  const bulletsLines = options.bullets.map(generateBulletParameter);
  const bullets = bulletsLines.length > 0
    ? setIndent(bulletsLines.join('\n\n'), { indent: 2, indentFirstLine: false })
    : '; 无炮弹模式';

  return `; ${options.name}
; ${options.description}
{from "${options.from ?? 'pattern gun'}"

  (include "/properties/standard/gun/define.ext")

  {FireSound "${options.fireSound}"} ; 开火音效
  {FireSoundclose "${options.fireSoundClose}"} ; 车内视角开火音效
  {ReloadSound "${options.reloadSound}"} ; 装弹音效

  {Cursor "${options.cursor ?? 'ironsights/tank'}"} ; 即时战略模式下的瞄准图标
  {CursorReloading "${options.cursorReloading ?? 'carbine_reload'}"} ; 即时战略模式下的装填图标
  {Crosshair "${options.crosshair ?? 'crosshair_tank'}"} ; 直接操控模式下的第三人称瞄准图标
  {CrosshairReloading "${options.crosshairReloading ?? 'crosshair_tank_reload'}"} ; 直接操控模式下的第三人称装填图标

  {Filling "ammo ${options.ammo}" ${options.amout}} ; 弹种及弹链内炮弹数量
  {Calibre ${options.calibre}} ; 口径
  {SyncedProjectiles ${options.syncedProjectiles === true ? 1 : 0}} ; 生成弹坑, 0 为禁止, 1 为允许
  {Preloaded}

  {UnlimitedRangeTPC ${(options.unlimitedRangeTPC ?? true) === true ? 1 : 0}} ; 直接操控模式下无视距离开火, 1 为允许, 0 为禁止
  {AimingTolerance ${options.aimingTolerance ?? 1}} ; 当瞄准偏离目标若干度时, 将限制 AI 将开火
  {SpreadTolerance ${(options.spreadTolerance ?? 0.5)}} ; 瞄准到一定精度就可以开火
  {ZeroingAccuracy ${(options.zeroingAccuracy ?? [ 0.95, 0.90, 0.85, 0.80, 0.75 ]).join(' ')}} ; 归零精度？不确定
  {LockFireDistanceTime ${options.lockFireDistanceTime ?? 3}} ; 超出射击距离后允许继续开火的时间
  {DisableRicochet ${(options.disableRicochet ?? false) === true ? 1 : 0}} ; 是否禁用跳弹模式
  ${curved}

  {RechargeTime ${options.rechargeTime}} ; 装填时间（秒）
  {RecoveryTime ${options.recoveryTime.toFixed(3)}} ; 短射间隔（秒）, 适用于弹链
  {FiringTimeout 0.35 0.15} ; 电脑在两次射击之间的最小间隔，不确定参数含义

  ${burst}

  ${automatic}

  {RicochetEnergyDamping ; 跳弹后的能量衰减，距离和比例
    {0  1.00}
    {10 0.90}
    {25 0.70}
    {45 0.30}
    {60 0.00}
  }

  {OvermatchDamping ; 过度穿透后的阻尼，角度和值
    {0  1.00}
    {30 1.10}
    {55 1.15}
    {60 1.45}
    {70 4.00}
    {90 6.00}
  }

  ${bullets}

}
`;

};
