import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type HumanOptions } from '../../options.mjs';

const options: HumanOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/breed/mp/inf/late/commander-1.set`,

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_heer_43_co_1_leutnant',
  portrait: 'ger_officer',
  icon: 'smg',
  iconPriority: 0,
  nationality: 'inf',

  armors: {
    head: 'ger_officer_cap',
  },

  perks: [
    'rifle_skill_rank_4',
    'tier4_standard',
    'binocular_vision',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "weapon inf-infantry-bolt-action-rifle" filling "ammo inf-10mm-clip ap" 5} ; 栓动步枪',
    '{Item "ammo inf-10mm-clip ap" 50} ; 栓动步枪弹夹',
    '{Item "m24_smoke grenade" 2} ; 烟雾弹',
    '{Item "bandage_ger" 5} ; 绷带',
    '{Item "binocular"} ; 望远镜',
  ],

};

export default options;
