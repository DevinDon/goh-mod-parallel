import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type HumanOptions } from '../../options.mjs';

const options: HumanOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/breed/mp/inf/late/sniper-1.set`,

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_heer_43_rfl_sniper',
  portrait: 'ger_sniper',
  icon: 'sniper',
  iconPriority: 0,
  nationality: 'inf',

  armors: {
    head: 'ger_stalhelm_m43_cover_face',
  },

  perks: [
    'rifle_skill_rank_4',
    'tier4_defense',
    'sniper_vision',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "weapon inf-infantry-bolt-action-sniper-rifle" filling "ammo inf-10mm-clip ap" 5} ; 栓动狙击步枪',
    '{Item "ammo inf-10mm-clip ap" 100} ; 栓动步枪弹夹',
    '{Item "m24_smoke grenade" 2} ; 烟雾弹',
    '{Item "bandage_ger" 5} ; 绷带',
    '{Item "binocular"} ; 望远镜',
  ],

};

export default options;
