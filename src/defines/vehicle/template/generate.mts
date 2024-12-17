import { logger } from '@pipers/logger';
import { saveGenerated, type GeneratedOptions } from '../../../utils/save-generated.mjs';
import { generateTemplate, VehicleType } from './generator.mjs';

/** 生成所有载具模板 */
export const generateAllTemplates = async () => {

  const options = VehicleType.map(
    type => ({
      destination: `mods/01-basic/resource/properties/standard/vehicle/template/${type}.ext`,
      type,
    }),
  );

  const generated: GeneratedOptions[] = options.map(
    option => {
      logger.info(`正在生成载具模板 "${option.destination}"`);
      return {
        destination: option.destination,
        content: generateTemplate(option),
      };
    },
  );

  await saveGenerated(generated);

};
