import { i0lines, i2lines } from '../../utils/set-indent.mjs';
import { type HumanOptions } from '../options.mjs';

/** 生成人员配置 */
export const generateHuman = ({
  tags,
  behaviour,
  skin,
  portrait,
  icon,
  iconPriority,
  nationality,
  armors,
  perks,
  veterancy,
  inventory,
  extra,
}: HumanOptions) => {

  const tagsLine = tags?.length
    ? `{tags ${tags.map(tag => `"${tag}"`).join(' ')}} ; 标签`
    : '; 无标签';

  const armorsLines = (armors?.head || armors?.body)
    ? i0lines(
      '{armors ; 防护装置',
      `  ${armors?.head ? `{head ${armors.head}}` : '; 无防弹头盔'}`,
      `  ${armors?.body ? `{body ${armors.body}}` : '; 无防弹衣'}`,
      '}',
    )
    : '; 无防护装置';

  const perksLines = perks?.length
    ? i0lines(...perks.map(perk => `("${perk}")`))
    : '; 无能力配置';

  const veterancyLines = veterancy?.length
    ? i0lines(...veterancy.map(item => `("${item}")`))
    : '; 无经验配置';

  const inventoryLines = inventory?.length
    ? i0lines(...inventory)
    : '; 无背包物品配置';

  const extraLines = extra?.length
    ? i0lines(...extra)
    : '; 无额外配置';

  return i0lines(
    '; 人员配置',
    '{breed',
    `  ${i2lines(tagsLine)}`,
    `  {behaviour ${behaviour}} ; 行为类别`,
    `  {skin "${skin}"} ; 外观`,
    `  {portrait "${portrait}"} ; 肖像`,
    `  {icon "${icon}"} ; 图标`,
    `  {icon_priority ${iconPriority}} ; 图标优先级`,
    `  {nationality ${nationality}} ; 国籍`,
    `  ${i2lines(armorsLines)}`,
    '  {perks ; 能力',
    '    (include "ability.inc")',
    `    ${i2lines(i2lines(perksLines))}`,
    '  }',
    '  {veterancy ; 体力',
    '    (include "ability.inc")',
    `    ${i2lines(i2lines(veterancyLines))}`,
    '  }',
    '  {inventory ; 背包',
    `    ${i2lines(i2lines(inventoryLines))}`,
    '    {in_hands 0}',
    '  }',
    `  ${i2lines(extraLines)}`,
    '}',
    '',
  );

};
