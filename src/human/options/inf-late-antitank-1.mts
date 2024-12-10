import { ProjectModConfigDir } from '../../utils/constants.mjs';
import { type HumanOptions } from '../options.mjs';

const options: HumanOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/breed/mp/inf/late/antitank-1.set`,

  tags: [ 'soldier_pzscheck' ],
  behaviour: 'soldier',
  skin: 'ger_heer_43_at_rkt',
  portrait: 'ger_regular',
  icon: 'bazooka',
  iconPriority: 0,
  nationality: 'inf',

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
    '{Item "weapon ger-karabiner-98k" filled} ; Karabiner 98k',
    '{Item "ammo ger-rifle clip" 25} ; Karabiner 98k 弹夹',
    '{Item "weapon ger-panzershreck-54" filled} ; 坦克杀手 54 反坦克火箭筒',
    '{Item "ammo ger-panzershreck heat" 2} ; 坦克杀手火箭弹',
    '{Item "m24_smoke grenade" 1} ; 烟雾弹',
    '{Item "bandage_ger" 3} ; 绷带',
  ],

};

export default options;
