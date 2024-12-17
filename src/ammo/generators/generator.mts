import { i0lines, i2lines } from '../../utils/formatter.mjs';
import { type AmmoOptions } from '../options.mjs';
import { generateBlastwave } from './blastwave-generator.mjs';

/** 生成弹药配置 */
export const generateAmmo = ({ type, tags, entity, mass, fill, caliber, speed, view, inventory, extra }: AmmoOptions) => {

  const tagLine = tags.length > 0
    ? `{tag "${tags.join(' ')}"} ; 标签`
    : '; 无标签';

  const entityLine = `{entity "${entity}"} ; 模型`;

  const massLine = `{mass ${mass}} ; 质量`;

  const viewLines = view.tail
    ? i0lines(
      `{view "${view.name}"`,
      `  {tail "${view.tail}" "tail"}`,
      '}',
    )
    : `{view "${view.name}"`;

  const inventoryWidth = inventory?.size?.width ?? Math.min(10, Math.max(1, Math.ceil(caliber / 10)));
  const inventoryHeight = inventory?.size?.height ?? Math.min(10, Math.max(1, Math.ceil(caliber / 50)));
  const inventoryWeight = Math.min(
    1000,
    inventory?.limit
      ? Math.ceil(1000 / inventory.limit)
      : Math.ceil(Math.pow(Math.max(1, mass) * inventoryWidth * inventoryHeight, 1 / 1.2)),
  );

  const inventoryLines = i0lines(
    '{inventory',
    `  {weight ${inventoryWeight}}`,
    `  {size ${inventoryWidth} ${inventoryHeight}}`,
    `  {block ${inventory?.block ?? 1}}`,
    '}',
  );

  // 计算爆炸冲击波伤害
  const blastwaveLines = generateBlastwave({ type, caliber, speed, mass, fill });

  const extraLines = extra?.length
    ? i0lines(...extra)
    : '; 无附加内容';

  return i0lines(
    `{from "pattern standard-${type}"`,
    `  ${tagLine}`,
    `  ${entityLine}`,
    `  ${massLine}`,
    `  ${i2lines(viewLines)}`,
    `  ${i2lines(inventoryLines)}`,
    `  ${i2lines(blastwaveLines)}`,
    `  ${i2lines(extraLines)}`,
    '}',
    '',
  );

};
