import { loadOptions } from '../../utils/load-options.mjs';
import { logger } from '../../utils/logger.mjs';
import { saveGenerated, type GeneratedOptions } from '../../utils/save-generated.mjs';
import { type WeaponOptions } from '../options.mjs';
import { generateWeapon } from './generator.mjs';

/** 生成所有武器配置 */
export const generateAllWeapons = async () => {

  const options = await loadOptions<WeaponOptions>('weapon/options');

  const generated: GeneratedOptions[] = options.map(
    option => {
      logger.info?.(`正在生成武器配置 "${option.destination}"`);
      return {
        destination: option.destination,
        content: generateWeapon(option),
      };
    },
  );

  await saveGenerated(generated);

};
