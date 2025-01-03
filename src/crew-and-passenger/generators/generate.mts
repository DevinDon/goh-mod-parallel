import { logger } from '@pipers/logger';
import { loadOptions } from '../../utils/load-options.mjs';
import { type GeneratedOptions } from '../../utils/save-generated.mjs';
import { saveGenerated } from '../../utils/save-generated.mjs';
import { type CrewAndPassengerOptions } from '../options.mjs';
import { generateCrewAndPassenger } from './generator.mjs';

/** 生成所有载具乘员及乘客配置 */
export const generateAllCrewAndPassengers = async () => {

  const options = await loadOptions<CrewAndPassengerOptions>('crew-and-passenger/options');

  const generated: GeneratedOptions[] = options.map(
    option => {
      logger.info?.(`正在生成载具乘员及乘客配置 "${option.destination}"`);
      return {
        destination: option.destination,
        content: generateCrewAndPassenger(option),
      };
    },
  );

  await saveGenerated(generated);

};
