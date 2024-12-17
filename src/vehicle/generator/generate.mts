import { logger } from '@pipers/logger';
import { loadOptions } from '../../utils/load-options.mjs';
import { saveGenerated, type GeneratedOptions } from '../../utils/save-generated.mjs';
import { generateVehicle, type VehicleOptions } from './vehicle.mjs';

/** 生成所有载具配置 */
export const generateAllVehicles = async () => {

  const options = await loadOptions<VehicleOptions>('vehicle/options');

  const generated: GeneratedOptions[] = options.map(
    option => {
      const destination = `mods/49-inf/resource/entity/-vehicle/${option.metadata.country}/${option.metadata.category}/${option.metadata.id}/${option.metadata.id}.def`;
      logger.info(`正在生成载具配置 "${destination}"`);
      return {
        destination,
        content: generateVehicle(option),
      };
    },
  );

  await saveGenerated(generated);

};
