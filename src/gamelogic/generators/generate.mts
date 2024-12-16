import { logger } from '@pipers/logger';
import { saveGenerated } from '../../utils/save-generated.mjs';
import { type GameLogicOptions } from '../options.mjs';
import { generateGameLogic } from './generator.mjs';

const options: GameLogicOptions = {
  unitLimits: {
    // 游戏原有定义
    officer: 2,
    flamer: 3,
    sniper: 5,
    squad_1: 5,
    squad_4: 5,
    signaller: 1,
    signaller_heavy: 1,
    limit1: 1,
    limit1a: 1,
    limit2: 2,
    limit2a: 2,
    limit3: 3,
    limit3a: 3,
    limit4: 4,
    limit5: 5,
    limit10: 10,
    // inf 阵营新增
    // 摩托化步兵排
    infinfantrylimit10: 10,
    // 305 系列
    infsdkfz3051limit5: 5,
    infsdkfz3052limit5: 5,
    infsdkfz305supplylimit5: 5,
    // 234 系列
    infsdkfz2341limit5: 5,
    infsdkfz2342limit2: 2,
    infsdkfz2343limit2: 2,
    infsdkfz2344limit2: 2,
    // 251 系列
    infsdkfz2511limit5: 5,
    infsdkfz25116limit2: 2,
    infsdkfz25117limit5: 5,
    infsdkfz25121limit2: 2,
    infsdkfz25122limit2: 2,
    // 自行火炮 / 自行榴弹炮
    infsdkfz124limit2: 2,
    // 坦克
    infpanzer4limit10: 10,
    infpanzer5limit3: 3,
    infpanzer6limit3: 3,
    infpanzer6blimit2: 2,
    infpanzer5dlimit1: 1,
    infpanzer5flimit1: 1,
    infpanzer6eacelimit1: 1,
    infpanzer6bacelimit1: 1,
  },
};

/** 生成所有游戏逻辑配置 */
export const generateAllGameLogic = async () => {

  logger.info('正在生成游戏逻辑配置');

  const generated = generateGameLogic(options);

  await saveGenerated(generated);

};
