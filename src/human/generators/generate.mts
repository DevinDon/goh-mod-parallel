import { logger } from '@pipers/logger';
import { loadOptions } from '../../utils/load-options.mjs';
import { type GeneratedOptions } from '../../utils/save-generated.mjs';
import { saveGenerated } from '../../utils/save-generated.mjs';
import { type HumanOptions } from '../options.mjs';
import { generateHuman } from './generator.mjs';

/** 生成所有人员配置 */
export const generateAllHumans = async () => {

  const options = await loadOptions<HumanOptions>('human/options');

  const generated: GeneratedOptions[] = options.map(
    option => {
      logger.info?.(`正在生成人员配置 "${option.destination}"`);
      return {
        destination: option.destination,
        content: generateHuman(option),
      };
    },
  );

  await saveGenerated(generated);

};
