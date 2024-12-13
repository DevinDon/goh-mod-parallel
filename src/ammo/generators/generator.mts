import { iline, ilines } from '../../utils/set-indent.mjs';
import { type AmmoOptions } from '../options.mjs';
import { generateBlastwave } from './blastwave-generator.mjs';

/** 生成弹药配置 */
export const generateAmmo = ({ type, tags, entity, mass, fill, caliber, speed, view, inventory, extra }: AmmoOptions) => {

  const tagLine = tags.length > 0
    ? `{tag "${tags.join(' ')}"} ; 标签`
    : '; 无标签';

  const entityLine = `{entity "${entity}"} ; 模型`;

  const massLine = `{mass ${mass}} ; 质量`;

  const viewLine = view.tail
    ? ilines(
      iline(0, `{view "${view.name}"`),
      iline(2, `{tail "${view.tail}" "tail"}`),
      iline(0, '}'),
    )
    : iline(0, `{view "${view.name}"}`);

  const inventoryWidth = inventory?.size?.width ?? Math.min(10, Math.max(1, Math.ceil(caliber / 10)));
  const inventoryHeight = inventory?.size?.height ?? Math.min(10, Math.max(1, Math.ceil(caliber / 50)));
  const inventoryWeight = Math.min(
    1000,
    inventory?.limit
      ? Math.ceil(1000 / inventory.limit)
      : Math.ceil(Math.pow(Math.max(1, mass) * inventoryWidth * inventoryHeight, 1 / 1.2)),
  );

  const inventoryLines = ilines(
    iline(0, '{inventory'),
    iline(2, `{weight ${inventoryWeight}}`),
    iline(2, `{size ${inventoryWidth} ${inventoryHeight}}`),
    iline(2, `{block ${inventory?.block ?? 1}}`),
    iline(0, '}'),
  );

  // 计算爆炸冲击波伤害
  const blastwave = generateBlastwave({ type, caliber, speed, mass, fill });

  return ilines(
    `{from "pattern ${type}"`,
    ilines(
      2,
      tagLine,
      entityLine,
      massLine,
      viewLine,
      inventoryLines,
      blastwave,
      (extra && extra.length > 0) ? ilines(2, ...extra) : '; 无附加内容',
    ),
    '}',
    '',
  );

};
