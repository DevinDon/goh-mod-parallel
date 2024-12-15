import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type HumanOptions } from '../../options.mjs';

const options: HumanOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/breed/mp/inf/late/engineer-1.set`,

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_heer_43_engi_rfl_1',
  portrait: 'ger_engineer',
  icon: 'tech',
  iconPriority: 0,
  nationality: 'inf',

  armors: {
    head: 'ger_m40_helmet_goggles',
  },

  perks: [
    'rifle_skill_rank_4',
    'tier4_defense',
    'engineer',
  ],

  veterancy: [
    'veterancy_lvl_0',
  ],

  inventory: [
    '{Item "weapon inf-infantry-assault-rifle" filling "ammo inf-5mm-magazine ap" 30} ; 突击步枪',
    '{Item "ammo inf-5mm-magazine ap" 120} ; 突击步枪弹匣',
    '{Item "m24 grenade" 1} ; 手榴弹',
    '{Item "m24_smoke grenade" 1} ; 烟雾弹',
    '{Item "bandage_ger" 5} ; 绷带',
    '{Item "dynamite-x7" 2} ; 雷管',
    '{Item "mine_detector"} ; 扫雷器',
    '{Item "wirecutters"} ; 剪线钳',
    '{Item "pickaxe"} ; 堑壕镐',
    '{Item "shovel_ger"} ; 工兵铲',
    '{Item "repair_kit" 1} ; 修理工具包',
  ],

};

export default options;
