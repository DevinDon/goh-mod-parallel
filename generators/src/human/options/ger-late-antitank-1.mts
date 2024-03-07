import type { HumanOptions } from '../options.mjs';

const options: HumanOptions = {

  destination: 'resource/set/breed/mp/ger/late/antitank_1.set',

  tags: [ 'soldier_pzscheck' ],
  behaviour: 'soldier',
  skin: 'ger_wh_43_smock_rfl_at',
  portrait: 'ger_regular',
  icon: 'bazooka',
  iconPriority: 0,
  nationality: 'ger',

  armors: {
    head: 'ger_m42_helmet_splinter',
  },

  perks: [
    'rifle_skill_rank_4',
    'tier4_recon',
    'at_rank_6',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "weapon ger-stg44" filled} ; StG 44 突击步枪',
    '{Item "ammo ger-stg44 magazine" 60} ; StG 44 突击步枪弹',
    '{Item "weapon ger-panzershreck-54" filled} ; 坦克杀手 54 反坦克火箭筒',
    '{Item "ammo ger-panzershreck heat" 9} ; 坦克杀手火箭弹',
    '{Item "m24_smoke grenade" 1} ; 烟雾弹',
    '{Item "bandage_ger" 3} ; 绷带',
  ],

};

export default options;
