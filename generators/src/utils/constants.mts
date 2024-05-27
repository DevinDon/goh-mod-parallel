import { getExecDirPath } from '@pipers/toolbox/environment';
import { resolve } from 'node:path';

/** `main.mjs` 所在的 `dist` 目录 */
export const GeneratorDistDir = resolve(getExecDirPath(import.meta.url), '..');

/** 当前模组的根目录 */
export const CurrentModDir = resolve(getExecDirPath(import.meta.url), '../../..');

/** 游戏模组所在的 `mods` 目录 */
export const ModsRootDir = resolve(getExecDirPath(import.meta.url), '../../../..');

/** 游戏根目录 */
export const GameRootDir = resolve(getExecDirPath(import.meta.url), '../../../../..');
