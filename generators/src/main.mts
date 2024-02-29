import { logger } from '@pipers/logger';
import { generateAllCrewAndPassengers } from './crew-and-passenger/generators/generate.mjs';
// import { generateAllWeapons } from './weapon/generators/generate.mjs';

logger.info('开始生成配置文件');

// await generateAllWeapons();
await generateAllCrewAndPassengers();

logger.info('生成配置文件完成');
