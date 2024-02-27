import { logger } from '@pipers/logger';
import { getExecDirPath } from '@pipers/toolbox/environment';
import { loadDefaultExportFromPath } from '@pipers/toolbox/extend';
import { listPaths, saveFile } from '@pipers/toolbox/filesystem';
import { TaskQueue } from '@pipers/toolbox/task-queue';
import { platform } from 'node:os';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { generateWeapon } from '../weapon/generator.mjs';
import type { WeaponOptions } from '../weapon/options.mjs';

export const getAllWeaponOptions = async () => {
  const paths = await listPaths(
    resolve(getExecDirPath(import.meta.url), '../weapon/options'),
    { type: 'absolute' },
  );
  const filtered = paths.filter(path => path.endsWith('.mjs'));
  const options = await Promise.all(
    platform() === 'win32'
      ? filtered.map(path => pathToFileURL(path).href).map(loadDefaultExportFromPath<WeaponOptions>)
      : filtered.map(loadDefaultExportFromPath<WeaponOptions>),
  );
  return options.filter((option): option is WeaponOptions => !!option);
};

export const saveToFiles = async (options: WeaponOptions[]) => {
  const output = resolve(getExecDirPath(import.meta.url), '../../outputs');
  const tasks = options.map(
    option => async () => {
      const weapon = generateWeapon(option);
      const path = resolve(output, `${option.name}.weapon`);
      await saveFile(path, weapon);
      logger.info(`已生成武器配置 ${option.name}.weapon`);
    },
  );
  new TaskQueue(tasks).start();
};
