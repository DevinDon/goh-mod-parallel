import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type HumanOptions } from '../../options.mjs';

const options: HumanOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/breed/mp/inf/late/antiarmor-gunner-1.set`,

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
    'tier4_defense',
    'at_rank_6',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "weapon inf-infantry-rocket-launcher" filling "ammo inf-infantry-rocket heat" 1} ; 多用途火箭筒',
    // '{Item "ammo inf-infantry-rocket he" 4} ; 步兵火箭筒高爆弹药',
    '{Item "ammo inf-infantry-rocket heat" 6} ; 步兵火箭筒破甲弹药',
    '{Item "bandage_ger" 5} ; 绷带',
  ],

};

export default options;
