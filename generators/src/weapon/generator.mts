import type { WeaponOptions } from './options.mjs';
import { generateOvermatchTable } from './overmatch-tables.mjs';

/** 生成武器配置 */
export const generateWeapon = (options: WeaponOptions) => {

  const burst = options.burst
    ? `{Burst
    {Short ${options.burst.long.standard} ${options.burst.long.random}} ; 远距离短连发，基数 +- 随机数
    {Long  ${options.burst.short.standard} ${options.burst.short.random}} ; 近距离长连发，基数 +- 随机数
    {RangeKoef ${options.burst.rangeKoef}} ; 该系数乘以 AimRange = 分界距离，大于分界距离为远距离，小于分界距离为近距离
  }`
    : '';

  const bullets = Object
    .keys(options.bullets)
    .map(
      name => {
        const bullet = options.bullets[name];
        const projectileDamageTable = bullet.projectile
          ? `{ProjectileDamageTable {100 ${bullet.projectile.nearest}} {500 ${bullet.projectile.farthest}} {1000 ${name === 'heat' ? bullet.projectile.nearest : 0}}} ; 穿深表`
          : '';
        return `{Parameters "${name}"
    {MinRange ${bullet.minRange}} ; 最短射击距离 m
    {AimRange ${bullet.aimRange}} ; AI 最长射击距离 m
    {MaxRange ${bullet.maxRange}} ; 玩家最长射击距离 m
    {Speed ${bullet.speed}} ; 炮弹速度
    {Gravity ${bullet.gravity ?? 5}} ; 炮弹重力
    ${bullet.projectile ? projectileDamageTable : '; 无穿深表配置'}
    ${bullet.damage ? `{MinimumDamageModifier ${bullet.damage}} ; 伤害` : '; 无穿透伤害配置'}
    {Spreading
      {RadiusTable {0 0} {100 ${bullet.spreading.radiusTable.nearest}} {500 ${bullet.spreading.radiusTable.farthest}} {1000 ${(bullet.spreading.radiusTable.farthest * (bullet.spreading.radiusTable.factor ?? 3.5)).toFixed(2)}}} ; 散布
      {BurstRecoveryTime ${bullet.spreading.burstRecoveryTime ?? 1}} ; 开火后恢复到正常精度的时间
      {BurstAccuracy     ${bullet.spreading.burstAccuracy ?? 100}} ; 默认值为 100, 连续开火第一发的精度为 100%, 值越低精度越低
      {SpreadPower       ${bullet.spreading.spreadPower ?? 1}} ; 默认值为 1, 大于 1 时炮弹落点会偏向中心, 小于 1 时炮弹落点会远离中心
      {SpreadXYRatio     ${bullet.spreading.spreadXYRatio ?? 0.75}} ; 默认值为 0.75 炮弹落点的横纵向比例, 小于 1 时更偏向于纵向落点, 大于 1 时更偏向于横向落点
    }
    ${bullet.overmatch ? (generateOvermatchTable(bullet.overmatch) ?? `; 未匹配到修正表配置 ${bullet.overmatch}`) : '; 无穿深修正表配置'}
    ${typeof bullet.falloffStrength === 'number' ? `{FalloffStrength ${bullet.falloffStrength}} ; 防空炮配置` : '; 无防空炮配置'}
  }`;
      },
    );

  return `; ${options.name}
; ${options.description}
{from "${options.from ?? 'pattern gun'}"

  (include "/properties/standard/gun/define.ext")

  {FireSound "${options.fireSound}"} ; 开火音效
  {FireSoundclose "${options.fireSoundClose}"} ; 车内视角开火音效
  {ReloadSound "${options.reloadSound}"} ; 装弹音效
  {Cursor "${options.cursor}"} ; 鼠标指针

  {Filling "ammo ${options.ammo}" ${options.amout}} ; 弹种及弹链内炮弹数量
  {Calibre ${options.calibre}} ; 口径
  {SyncedProjectiles ${options.syncedProjectiles === true ? 1 : 0}} ; 生成弹坑, 0 为禁止, 1 为允许

  {UnlimitedRangeTPC ${(options.unlimitedRangeTPC ?? true) === true ? 1 : 0}} ; 直接操控模式下无视距离开火, 1 为允许, 0 为禁止
  {AimingTolerance ${options.aimingTolerance ?? 1}} ; 当瞄准偏离目标若干度时, 将限制 AI 将开火
  {SpreadTolerance ${(options.spreadTolerance ?? 0.5)}} ; 瞄准到一定精度就可以开火
  {ZeroingAccuracy ${(options.zeroingAccuracy ?? [0.95, 0.90, 0.85, 0.80, 0.75]).join(' ')}} ; 归零精度？不确定
  {LockFireDistanceTime ${options.lockFireDistanceTime ?? 3}} ; 超出射击距离后允许继续开火的时间
  {DisableRicochet ${(options.disableRicochet ?? false) === true ? 1 : 0}} ; 是否禁用跳弹模式
  ${options.curved === true ? '{Aimtype curved} ; 曲射模式' : '; 不启用曲射模式'}

  {RechargeTime ${options.rechargeTime}} ; 装填时间（秒）
  {RecoveryTime ${options.recoveryTime.toFixed(3)}} ; 短射间隔（秒）, 适用于弹链

  ${options.automatic === true ? '{Automatic} ; 自动武器' : '; 非自动武器'}

  ${options.burst ? burst : '; 无连发模式'}

  ${bullets.length > 0 ? bullets.join('\n\n  ') : '; 无炮弹模式'}

}
`;

};
