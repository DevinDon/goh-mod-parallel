import { logger } from '@pipers/logger';
import { copy } from '@pipers/toolbox/filesystem';
import { TaskQueue } from '@pipers/toolbox/task-queue';
import { resolve } from 'node:path';
import { GameModsRootDir, ProjectModConfigDir } from '../utils/constants.mjs';
import { archive } from './utils/zip.mjs';

/** 打包游戏模组 */
export const pack = async () => {

  const list: string[] = [
    '01-basic',
    '02-map',
    '03-multiplayer',
    '19-germany',
    '29-ussr',
    '39-usa',
    '49-inf',
  ];

  const ModName = 'parallel';

  const tasks = [
    ...list
      .map(
        name => [
          () => archive(
            resolve(ProjectModConfigDir, `${name}/localizations`),
            resolve(GameModsRootDir, ModName, `localizations/${name}-localizations.pak`),
          ),
          () => archive(
            resolve(ProjectModConfigDir, `${name}/resource`),
            resolve(GameModsRootDir, ModName, `resource/${name}-resource.pak`),
          ),
        ],
      )
      .flat(),
    () => copy(
      resolve(ProjectModConfigDir, 'mod.info'),
      resolve(GameModsRootDir, ModName, 'mod.info'),
    ),
  ];

  logger.info(`开始打包到目录 "${ModName}"`);
  await new TaskQueue(tasks).start();
  logger.info(`已打包到目录 "${ModName}"`);

};
