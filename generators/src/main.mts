import { logger } from '@pipers/logger';
import { getAllWeaponOptions, saveToFiles } from './utils/file-generator.mjs';

logger.info('正在生成武器配置');

await saveToFiles(await getAllWeaponOptions());

logger.info('已生成武器配置');
