import { logger } from '@pipers/logger';
import { setIndent } from '../../utils/set-indent.mjs';
import { BulletReloadingCursors, isSupportedBulletType, type WeaponBulletOptions } from '../options.mjs';
import { generateOvermatchTable } from './overmatch-table-generator.mjs';

const toFixed = (value: number) => (Number.isInteger(value) ? value.toFixed(0) : value.toFixed(2));

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

  const maxRange = bullet.maxRange;
  const aimRange = Math.min(
    Math.pow(bullet.aimRange ?? maxRange, 1 / 2.05) * 10,
    maxRange,
  );
  const effectiveRange = Math.min(
    bullet.effectiveRange !== undefined
      ? Math.pow(bullet.effectiveRange, 1 / 2.05) * 10 / 10
      : aimRange / 10,
    aimRange,
  );

  return `{Parameters "${name}"
  {CursorReloading "${reloading}"} ; 装填图标
  {MinRange ${toFixed(bullet.minRange)}} ; 最短射击距离 m
  {AimRange ${toFixed(aimRange)}} ; AI 最长射击距离 m
  {MaxRange ${toFixed(maxRange)}} ; 玩家最长射击距离 m
  {Speed ${toFixed(bullet.speed)}} ; 炮弹速度
  {Gravity ${toFixed(bullet.gravity ?? 5)}} ; 炮弹重力
  ${projectileDamageTable}
  ${damageToArmor}
  ${damageToHuman}
  {Spreading
    {RadiusTable {0 0} {${toFixed(effectiveRange)} ${toFixed(bullet.spreading.radiusTable.nearest)}} {${toFixed(aimRange)} ${toFixed(bullet.spreading.radiusTable.farthest)}} {${toFixed(maxRange)} ${toFixed(bullet.spreading.radiusTable.farthest * (bullet.spreading.radiusTable.factor ?? 10))}}} ; 散布
    {BurstRecoveryTime ${toFixed(bullet.spreading.burstRecoveryTime ?? 1)}} ; 开火后恢复到正常精度的时间
    {BurstAccuracy     ${toFixed(bullet.spreading.burstAccuracy ?? 100)}} ; 默认值为 100, 连续开火第一发的精度为 100%, 值越低精度越低
    {SpreadPower       ${toFixed(bullet.spreading.spreadPower ?? 1)}} ; 默认值为 1, 大于 1 时炮弹落点会偏向中心, 小于 1 时炮弹落点会远离中心
    {SpreadXYRatio     ${toFixed(bullet.spreading.spreadXYRatio ?? 0.75)}} ; 默认值为 0.75 炮弹落点的横纵向比例, 小于 1 时更偏向于纵向落点, 大于 1 时更偏向于横向落点
  }
  ${overmatchTable}
  ${falloffStrength}
}`;

};
