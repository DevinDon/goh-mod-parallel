import { logger } from '@pipers/logger';
import { setIndent } from '../../utils/set-indent.mjs';
import { BulletReloadingCursors, isSupportedBulletType, type WeaponBulletOptions } from '../options.mjs';
import { generateOvermatchTable } from './overmatch-table-generator.mjs';

/** 生成弹种参数 */
export const generateBulletParameter = (bullet: WeaponBulletOptions) => {

  const { name } = bullet;

  if (!isSupportedBulletType(name)) {
    logger.warn(`不支持的炮弹类型: "${name}"`);
  }

  const reloading = BulletReloadingCursors[name] ?? 'carbine_reload';

  const projectileDamageTable = bullet.projectile
    ? `{ProjectileDamageTable {100 ${bullet.projectile.nearest}} {500 ${bullet.projectile.farthest}} {1000 ${name === 'heat' ? bullet.projectile.nearest : 0}}} ; 穿深表`
    : '; 无穿深表配置';

  const damageToArmor = bullet.damageToArmor
    ? `{MinimumDamageModifier ${bullet.damageToArmor}} ; 弹种对装甲的击穿伤害`
    : '; 无装甲伤害配置';

  const damageToHuman = bullet.damageToHuman
    ? `{HealthDamage ${bullet.damageToHuman}} ; 弹种对人员的击穿伤害`
    : '; 无人员伤害配置';

  const overmatchTable = bullet.overmatch
    ? setIndent(generateOvermatchTable(bullet.overmatch), { indent: 2, indentFirstLine: false })
    : '; 无穿深修正表配置';

  const falloffStrength = typeof bullet.falloffStrength === 'number'
    ? `{FalloffStrength ${bullet.falloffStrength}} ; 防空炮配置`
    : '; 无防空炮配置';

  return `{Parameters "${name}"
  {CursorReloading "${reloading}"} ; 装填图标
  {MinRange ${bullet.minRange}} ; 最短射击距离 m
  {AimRange ${bullet.aimRange}} ; AI 最长射击距离 m
  {MaxRange ${bullet.maxRange}} ; 玩家最长射击距离 m
  {Speed ${bullet.speed}} ; 炮弹速度
  {Gravity ${bullet.gravity ?? 5}} ; 炮弹重力
  ${projectileDamageTable}
  ${damageToArmor}
  ${damageToHuman}
  {ProjectileDamageThreshold 1} ; 小于该参数的伤害会被忽略
  {Spreading
    {RadiusTable {0 0} {100 ${bullet.spreading.radiusTable.nearest}} {500 ${bullet.spreading.radiusTable.farthest}} {1000 ${(bullet.spreading.radiusTable.farthest * (bullet.spreading.radiusTable.factor ?? 3.5)).toFixed(2)}}} ; 散布
    {BurstRecoveryTime ${bullet.spreading.burstRecoveryTime ?? 1}} ; 开火后恢复到正常精度的时间
    {BurstAccuracy     ${bullet.spreading.burstAccuracy ?? 100}} ; 默认值为 100, 连续开火第一发的精度为 100%, 值越低精度越低
    {SpreadPower       ${bullet.spreading.spreadPower ?? 1}} ; 默认值为 1, 大于 1 时炮弹落点会偏向中心, 小于 1 时炮弹落点会远离中心
    {SpreadXYRatio     ${bullet.spreading.spreadXYRatio ?? 0.75}} ; 默认值为 0.75 炮弹落点的横纵向比例, 小于 1 时更偏向于纵向落点, 大于 1 时更偏向于横向落点
  }
  ${overmatchTable}
  ${falloffStrength}
}`;

};
