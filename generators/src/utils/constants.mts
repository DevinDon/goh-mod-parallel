import { getExecDirPath } from '@pipers/toolbox/environment';
import { resolve } from 'node:path';

/** `main.mjs` 所在的 `dist` 目录 */
export const GeneratorDistDir = resolve(getExecDirPath(import.meta.url), '..');

/** 当前模组的根目录 */
export const ModRootDir = resolve(getExecDirPath(import.meta.url), '../../..');
