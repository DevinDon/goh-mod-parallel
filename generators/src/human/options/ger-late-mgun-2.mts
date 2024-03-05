import type { HumanOptions } from '../options.mjs';

const options: HumanOptions = {

  destination: 'resource/set/breed/mp/ger/late/mgun_2.set',

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_wh_43_mg',
  portrait: 'ger_regular',
  icon: 'mg',
  iconPriority: 0,
  nationality: 'ger',

  armors: {
    head: 'ger_m40_helmet',
  },

  perks: [
    'mg_skill_rank_4',
    'tier4_defense',
  ],

  veterancy: [
    'veterancy_lvl_8',
  ],

  inventory: [
    '{Item "shovel_ger"} ; 工兵铲',
    '{Item "ammo ger-mgun" 1000} ; MG42 弹链',
    '{Item "m24 grenade" 5} ; 手榴弹',
    '{Item "m24_smoke grenade" 5} ; 烟雾弹',
    '{Item "bandage_ger" 10} ; 绷带',
  ],

};

export default options;
