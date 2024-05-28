import { ProjectModConfigDir } from '../../utils/constants.mjs';
import type { HumanOptions } from '../options.mjs';

const options: HumanOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/breed/mp/inf/late/engineer-2.set`,

  tags: [ 'soldier' ],
  behaviour: 'soldier',
  skin: 'ger_heer_43_engi_smg_1',
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
    '{Item "weapon ger-stg44" filled} ; StG 44 突击步枪',
    '{Item "ammo ger-stg44 magazine" 180} ; StG 44 突击步枪弹',
    '{Item "m24 grenade" 1} ; 手榴弹',
    '{Item "nbk39 grenade" 1} ; 烟雾弹',
    '{Item "dynamite-x7" 2} ; 炸药',
    '{Item "bandage_ger" 2} ; 绷带',
    '{Item "mine_detector"} ; 扫雷器',
    '{Item "wirecutters"} ; 剪线钳',
    '{Item "pickaxe"} ; 堑壕镐',
    '{Item "shovel_ger"} ; 工兵铲',
  ],

};

export default options;
