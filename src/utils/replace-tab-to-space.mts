import { logger } from '@pipers/logger';
import { listPathsDeep, readFile, writeFile } from '@pipers/toolbox/node/filesystem';

/** 将指定目录下的所有文件中的 tab 替换为 2 个空格 */
export const replaceTabToSpace = async (dir: string) => {
  const paths = await listPathsDeep(dir, { type: 'absolute' });
  logger.info?.(`将要替换 ${paths.length} 个文件`);
  for (const path of paths) {
    const content = await readFile(path, 'utf-8');
    const newContent = content.replace(/\t/g, '  ');
    await writeFile(path, newContent);
  }
};
