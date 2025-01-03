import { loadOptions } from '../../utils/load-options.mjs';
import { logger } from '../../utils/logger.mjs';
import { saveGenerated, type GeneratedOptions } from '../../utils/save-generated.mjs';
import { type AmmoOptions } from '../options.mjs';
import { generateAmmo } from './generator.mjs';

/** 生成所有弹药配置 */
export const generateAllAmmos = async () => {

  const options = await loadOptions<AmmoOptions>('ammo/options');

  const generated: GeneratedOptions[] = options.map(
    option => {
      logger.info?.(`正在生成弹药配置 "${option.destination}"`);
      return {
        destination: option.destination,
        content: generateAmmo(option),
      };
    },
  );

  await saveGenerated(generated);

};
