import { logger } from '@pipers/logger';
import { getExecDirPath } from '@pipers/toolbox/environment';
import { resolve } from 'node:path';
import { getAllWeaponOptions, saveGunWeaponsToFiles } from './utils/save-gun-weapons.mjs';

logger.info('正在生成武器配置');

await saveGunWeaponsToFiles(
  await getAllWeaponOptions(),
  resolve(getExecDirPath(import.meta.url), '../../resource/set/stuff/gun'),
);

logger.info('已生成武器配置');
