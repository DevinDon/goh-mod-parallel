import type { HumanOptions } from '../options.mjs';

const options: HumanOptions = {

  destination: 'resource/set/breed/mp/inf/late/mgun-2.set',

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_wh_43_mg',
  portrait: 'ger_regular',
  icon: 'mg',
  iconPriority: 0,
  nationality: 'inf',

  armors: {
    head: 'ger_m40_helmet',
  },

  perks: [
    'rifle_skill_rank_4',
    'tier4_standard',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "weapon ger-karabiner-98k" filled} ; Karabiner 98k',
    '{Item "ammo ger-rifle clip" 55} ; Karabiner 98k 弹夹',
    '{Item "ammo ger-mgun api" 500} ; MG42 弹链',
    '{Item "m24 grenade" 1} ; 手榴弹',
    '{Item "m24_smoke grenade" 3} ; 烟雾弹',
    '{Item "bandage_ger" 7} ; 绷带',
    '{Item "shovel_ger"} ; 工兵铲',
  ],

};

export default options;
