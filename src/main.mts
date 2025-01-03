import { generateAllAmmos } from './ammo/generators/generate.mjs';
import { generateAllCrewAndPassengers } from './crew-and-passenger/generators/generate.mjs';
import { generateAllGameLogic } from './gamelogic/generators/generate.mjs';
import { generateAllHumans } from './human/generators/generate.mjs';
import { pack } from './packager/packager.mjs';
import { logger } from './utils/logger.mjs';
import { generateAllVehicles } from './vehicle/generator/generate.mjs';
import { generateAllTemplates } from './vehicle/template/generate.mjs';
import { generateAllWeapons } from './weapon/generators/generate.mjs';

logger.info?.('开始生成配置文件');

await generateAllCrewAndPassengers();
await generateAllHumans();
await generateAllWeapons();
await generateAllAmmos();
await generateAllGameLogic();
await generateAllTemplates();
await generateAllVehicles();

logger.info?.('生成配置文件完成');

await pack();

logger.info?.('模组打包完成');
