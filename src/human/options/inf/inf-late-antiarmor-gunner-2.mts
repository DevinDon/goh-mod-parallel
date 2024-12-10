import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type HumanOptions } from '../../options.mjs';

const options: HumanOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/breed/mp/inf/late/antiarmor-gunner-2.set`,

  tags: [ 'soldier_pzscheck' ],
  behaviour: 'soldier',
  skin: 'ger_heer_43_at_rkt_asst',
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
    'at_rank_5',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "weapon inf-infantry-bolt-action-rifle" filling "ammo inf-10mm-clip ap" 5} ; 栓动步枪',
    '{Item "ammo inf-10mm-clip ap" 50} ; 栓动步枪弹夹',
    '{Item "ammo inf-infantry-rocket-launcher-ammo he" 2} ; 步兵火箭筒高爆弹药',
    '{Item "ammo inf-infantry-rocket-launcher-ammo heat" 6} ; 步兵火箭筒破甲弹药',
    '{Item "m24_smoke grenade" 2} ; 烟雾弹',
    '{Item "bandage_ger" 5} ; 绷带',
    '{Item "weapon inf-infantry-disposable-heat-rocket-launcher" filled} ; 一次性破甲火箭筒',
  ],

};

export default options;
