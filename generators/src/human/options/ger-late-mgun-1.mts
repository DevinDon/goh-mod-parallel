import type { HumanOptions } from '../options.mjs';

export const options: HumanOptions = {

  destination: 'resource/set/breed/mp/ger/late/mgun_1.set',

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_wh_43_mg',
  portrait: 'ger-regular',
  icon: 'mg',
  iconPriority: 0,
  nationality: 'ger',

  armors: {
    head: 'ger_m40_helmet',
  },

  perks: [
    'mg_skill_rank_2',
    'tier2_standard',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "mg42_belt" filling "mgun_ger belt ammo" 100}',
    '{Item "mgun_ger belt ammo" 600}',
    '{Item "m24 grenade" 0.25 0.5}',
    '{Item "m24_smoke grenade" 0.25 0.5}',
    '{Item "bandage_ger" 3.5 0.5}',
    '{Item "shovel_ger"}',
  ],

};
