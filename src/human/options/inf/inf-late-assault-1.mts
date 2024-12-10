import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type HumanOptions } from '../../options.mjs';

const options: HumanOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/breed/mp/inf/late/assault-1.set`,

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_luft_44_fielddiv_nco_smg',
  portrait: 'ger_luftwaffe_recon',
  icon: 'smg',
  iconPriority: 0,
  nationality: 'inf',

  armors: {
    head: 'ger_m40_helmet',
  },

  perks: [
    'rifle_skill_rank_4',
    'tier4_recon',
    'at_rank_4',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "weapon inf-infantry-assault-rifle" filling "ammo inf-5mm-magazine ap" 30} ; 突击步枪',
    '{Item "ammo inf-5mm-magazine ap" 240} ; 突击步枪弹匣',
    '{Item "m24 grenade" 4} ; 手榴弹',
    '{Item "m24_smoke grenade" 2} ; 烟雾弹',
    '{Item "bandage_ger" 5} ; 绷带',
    '{Item "weapon inf-infantry-disposable-heat-rocket-launcher" filled} ; 一次性破甲火箭筒',
  ],

};

export default options;
