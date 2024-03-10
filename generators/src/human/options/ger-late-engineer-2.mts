import type { HumanOptions } from '../options.mjs';

const options: HumanOptions = {

  destination: 'resource/set/breed/mp/ger/late/engineer_2.set',

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_wh_43_pio_rfl',
  portrait: 'ger_engineer',
  icon: 'tech',
  iconPriority: 0,
  nationality: 'ger',

  armors: {
    head: 'ger_m40_helmet_goggles',
  },

  perks: [
    'rifle_skill_rank_4',
    'tier4_defense',
    'engineer',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "weapon ger-karabiner-98k" filled} ; Karabiner 98k',
    '{Item "ammo ger-rifle clip" 95} ; Karabiner 98k 弹夹',
    '{Item "m24 grenade" 2} ; 手榴弹',
    '{Item "nbk39 grenade" 2} ; 烟雾弹',
    '{Item "dynamite-x7" 2} ; 炸药',
    '{Item "bandage_ger" 2} ; 绷带',
    '{Item "mine_detector"} ; 扫雷器',
    '{Item "wirecutters"} ; 剪线钳',
    '{Item "pickaxe"} ; 堑壕镐',
    '{Item "shovel_ger"} ; 工兵铲',
  ],

};

export default options;
