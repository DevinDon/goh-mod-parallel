import { platform } from 'node:os';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadDefaultExportFromPath } from '@pipers/toolbox/universal/promise';
import { listPathsDeep } from '@pipers/toolbox/node/filesystem';
import { type AmmoOptions } from '../ammo/options.mjs';
import { type CrewAndPassengerOptions } from '../crew-and-passenger/options.mjs';
import { type HumanOptions } from '../human/options.mjs';
import { type WeaponOptions } from '../weapon/options.mjs';
import { DistDir } from './constants.mjs';

/** 加载指定目录下的所有配置文件，该目录路径相对于 `main.mjs` 所在的 `dist` 目录 */
export const loadOptions = async <T extends WeaponOptions | CrewAndPassengerOptions | HumanOptions | AmmoOptions>(dir: string): Promise<T[]> => {

  const paths = await listPathsDeep(
    resolve(DistDir, dir),
    { type: 'absolute' },
  );
  const filtered = paths.filter(path => path.endsWith('.mjs'));

  const options: (T | null)[] = await Promise.all(
    platform() === 'win32'
      ? filtered.map(path => pathToFileURL(path).href).map(loadDefaultExportFromPath<T>)
      : filtered.map(loadDefaultExportFromPath<T>),
  );

  return options.filter((option): option is T => !!option);

};
