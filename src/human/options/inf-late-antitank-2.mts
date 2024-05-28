import { ProjectModConfigDir } from '../../utils/constants.mjs';
import type { HumanOptions } from '../options.mjs';

const options: HumanOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/breed/mp/inf/late/antitank-2.set`,

  tags: [ 'soldier_pzfaust' ],
  behaviour: 'soldier',
  skin: 'ger_heer_43_at_rkt_asst',
  portrait: 'ger_regular',
  icon: 'smg',
  iconPriority: 0,
  nationality: 'inf',

  armors: {
    head: 'ger_m42_helmet_splinter',
  },

  perks: [
    'rifle_skill_rank_4',
    'tier4_recon',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "weapon ger-stg44" filled} ; StG 44 突击步枪',
    '{Item "ammo ger-stg44 magazine" 180} ; StG 44 突击步枪弹',
    '{Item "ammo ger-panzershreck heat" 4} ; 坦克杀手火箭弹',
    '{Item "m24_smoke grenade" 2} ; 烟雾弹',
    '{Item "bandage_ger" 6} ; 绷带',
    '{Item "shovel_ger"} ; 工兵铲',
  ],

};

export default options;
