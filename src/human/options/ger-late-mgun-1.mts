import type { HumanOptions } from '../options.mjs';

const options: HumanOptions = {

  destination: 'resource/set/breed/mp/ger/late/mgun_1.set',

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_heer_43_mg_1',
  portrait: 'ger_regular',
  icon: 'mg',
  iconPriority: 0,
  nationality: 'ger',

  armors: {
    head: 'ger_m40_helmet',
  },

  perks: [
    'mg_skill_rank_4',
    'tier4_standard',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "weapon ger-mg42" filled} ; MG42',
    '{Item "ammo ger-mgun api" 250} ; MG42 弹链',
    '{Item "m24 grenade" 1} ; 手榴弹',
    '{Item "m24_smoke grenade" 1} ; 烟雾弹',
    '{Item "bandage_ger" 2} ; 绷带',
  ],

};

export default options;
