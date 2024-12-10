import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type HumanOptions } from '../../options.mjs';

const options: HumanOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/breed/mp/inf/late/machine-gunner-1.set`,

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_heer_43_mg_1',
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
    '{Item "weapon inf-infantry-general-purpose-machine-gun" filling "ammo inf-10mm-chain ap" 240} ; 通用机枪',
    '{Item "ammo inf-10mm-clip ap" 480} ; 通用机枪弹链',
    '{Item "bandage_ger" 5} ; 绷带',
  ],

};

export default options;
