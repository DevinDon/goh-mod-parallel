import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type HumanOptions } from '../../options.mjs';

const options: HumanOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/breed/mp/inf/late/medic-1.set`,

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_heer_43_medic_1',
  portrait: 'ger_medic',
  icon: 'tech',
  iconPriority: 0,
  nationality: 'inf',

  armors: {
    head: 'ger_stalhelm_m43_medic_var2',
  },

  perks: [
    'rifle_skill_rank_4',
    'tier4_defense',
    'medic',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "weapon inf-infantry-bolt-action-rifle" filling "ammo inf-10mm-clip ap" 5} ; 栓动步枪',
    '{Item "ammo inf-5mm-magazine ap" 50} ; 栓动步枪弹夹',
    '{Item "m24_smoke grenade" 5} ; 烟雾弹',
    '{Item "bandage_ger" 20} ; 绷带',
    '{Item "ger_sidecap_m39_var2_med"}; 医疗箱',
    '{Item "tent_kit" 1} ; 医疗帐篷',
  ],

};

export default options;
