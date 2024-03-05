import { equal } from 'node:assert';
import { it } from 'node:test';
import { generateHuman } from '../../human/generators/generator.mjs';
import { options } from '../../human/options/ger-late-mgun-1.mjs';

const want = `; 人员配置
{Breed

  {Tags "soldier"} ; 标签

  {Behaviour soldier} ; 行为类别
  {Skin "ger_wh_43_mg"} ; 外观
  {Portrait "ger-regular"} ; 肖像
  {Icon "mg"} ; 图标
  {Icon_priority 0} ; 图标优先级
  {Nationality ger} ; 国籍

  {Armors ; 防护装置
      {head ger_m40_helmet}
      ; 无防弹衣
    }

  {Perks ; 能力
    (include "ability.inc")
    ("mg_skill_rank_2")
    ("tier2_standard")
  }

  {Veterancy ; 体力
    (include "ability.inc")
    ("veterancy_lvl_0")
  }

  {Inventory ; 背包
    {Size 10 10}
    {Weight 200}

    {Item "mg42_belt" filling "mgun_ger belt ammo" 100}
    {Item "mgun_ger belt ammo" 600}
    {Item "m24 grenade" 0.25 0.5}
    {Item "m24_smoke grenade" 0.25 0.5}
    {Item "bandage_ger" 3.5 0.5}
    {Item "shovel_ger"}

    {in_hands 0}
  }

  ; 无额外配置

}
`;

it('generate human', () => {
  const output = generateHuman(options);
  equal(output, want);
});
