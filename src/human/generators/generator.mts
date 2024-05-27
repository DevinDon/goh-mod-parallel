import { setIndent } from '../../utils/set-indent.mjs';
import type { HumanOptions } from '../options.mjs';

/** 生成人员配置 */
export const generateHuman = ({
  destination,
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

  const armorsLinesRaw = (armors?.head || armors?.body)
    ? `{armors ; 防护装置
  ${armors?.head ? `{head ${armors.head}}` : '; 无防弹头盔'}
  ${armors?.body ? `{body ${armors.body}}` : '; 无防弹衣'}
}`
    : '; 无防护装置';
  const armorsLines = setIndent(armorsLinesRaw, { indent: 2, indentFirstLine: false });

  const perksLinesRaw = perks?.length
    ? perks.map(perk => `("${perk}")`).join('\n')
    : '; 无能力配置';
  const perksLines = setIndent(perksLinesRaw, { indent: 4, indentFirstLine: false });

  const veterancyLinesRaw = veterancy?.length
    ? veterancy.map(item => `("${item}")`).join('\n')
    : '; 无经验配置';
  const veterancyLines = setIndent(veterancyLinesRaw, { indent: 4, indentFirstLine: false });

  const inventoryLinesRaw = inventory?.length
    ? inventory.join('\n')
    : '; 无背包物品配置';
  const inventoryLines = setIndent(inventoryLinesRaw, { indent: 4, indentFirstLine: false });

  const extraLinesRaw = extra?.length
    ? extra.join('\n')
    : '; 无额外配置';
  const extraLines = setIndent(extraLinesRaw, { indent: 2, indentFirstLine: false });

  return `; 人员配置
{breed

  ${tagsLine}

  {behaviour ${behaviour}} ; 行为类别
  {skin "${skin}"} ; 外观
  {portrait "${portrait}"} ; 肖像
  {icon "${icon}"} ; 图标
  {icon_priority ${iconPriority}} ; 图标优先级
  {nationality ${nationality}} ; 国籍

  ${armorsLines}

  {perks ; 能力
    (include "ability.inc")
    ${perksLines}
  }

  {veterancy ; 体力
    (include "ability.inc")
    ${veterancyLines}
  }

  {inventory ; 背包
    ${inventoryLines}

    {in_hands 0}
  }

  ${extraLines}

}
`;

};
