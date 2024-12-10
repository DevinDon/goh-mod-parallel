import { getExecDirPath } from '@pipers/toolbox/node/environment';
import { resolve } from 'node:path';

/** 当前目录 */
const currentDir = getExecDirPath(import.meta.url);

/** `main.mjs` 所在的 `dist` 目录 */
export const DistDir = resolve(currentDir, '..');

/** 当前模组的根目录 */
export const ProjectRootDir = resolve(DistDir, '..');

/** 模组配置文件所在的目录 */
export const ProjectModConfigDir = resolve(ProjectRootDir, 'mods');

/** 游戏模组所在的 `mods` 目录 */
export const GameModsRootDir = resolve(ProjectRootDir, '..');

/** 游戏根目录 */
export const GameRootDir = resolve(GameModsRootDir, '..');
