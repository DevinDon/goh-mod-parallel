import type { HumanOptions } from '../options.mjs';

const options: HumanOptions = {

  destination: 'resource/set/breed/mp/inf/late/officer-2.set',

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_wh_off_major_coat',
  portrait: 'ger_officer',
  icon: 'smg',
  iconPriority: 5,
  nationality: 'inf',

  armors: {
    head: 'ger_officer_cap_luftwaffe',
  },

  perks: [
    'rifle_skill_rank_4',
    'tier4_standard',
    'binocular_vision',
  ],

  veterancy: [
    'veterancy_lvl_1',
  ],

  inventory: [
    '{Item "weapon ger-stg44" filled} ; StG 44 突击步枪',
    '{Item "ammo ger-stg44 magazine" 240} ; StG 44 突击步枪弹',
    '{Item "m24_smoke grenade" 3} ; 烟雾弹',
    '{Item "bandage_ger" 3} ; 绷带',
    '{Item "binocular"} ; 望远镜',
  ],

};

export default options;
