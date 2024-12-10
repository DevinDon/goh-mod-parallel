import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type HumanOptions } from '../../options.mjs';

const options: HumanOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/breed/mp/inf/late/machine-gunner-2.set`,

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_heer_43_mg_asst_1',
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
    '{Item "weapon inf-infantry-bolt-action-rifle" filling "ammo inf-10mm-clip ap" 5} ; 栓动步枪',
    '{Item "ammo inf-10mm-clip ap" 50} ; 栓动步枪弹夹',
    '{Item "ammo inf-10mm-chain ap" 960} ; 通用机枪弹链',
    '{Item "m24_smoke grenade" 2} ; 烟雾弹',
    '{Item "bandage_ger" 5} ; 绷带',
    '{Item "binocular"} ; 望远镜',
  ],

};

export default options;
