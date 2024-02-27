import { logger } from '@pipers/logger';
import { getAllWeaponOptions, saveGunWeaponsToFiles } from './utils/save-gun-weapons.mjs';

logger.info('正在生成武器配置');

await saveGunWeaponsToFiles(await getAllWeaponOptions());

logger.info('已生成武器配置');
