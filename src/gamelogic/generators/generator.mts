import { type GeneratedOptions } from '../../utils/save-generated.mjs';
import { i0lines } from '../../utils/set-indent.mjs';
import { type GameLogicOptions } from '../options.mjs';

/** 生成游戏逻辑配置 */
export const generateGameLogic = (options: GameLogicOptions) => {

  /** 单位数量限制 */
  const unitLimitsTags = Object
    .entries(options.unitLimits)
    .map(([ key, value ]) => `${key}=${value}`)
    .join(';');
  const unitLimitsGenerated: GeneratedOptions = {
    destination: 'mods/03-multiplayer/resource/set/multiplayer/games/presets/global_parameters/unitlimits.inc',
    content: i0lines(
      `{unitLimits "${unitLimitsTags}"}`,
      '',
    ),
  };

  return [ unitLimitsGenerated ];

};
