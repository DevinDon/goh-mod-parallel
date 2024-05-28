import { logger } from '@pipers/logger';
import { createWriteStream, ensureDir, ensureFile } from '@pipers/toolbox/filesystem';
import archiver from 'archiver';
import { dirname } from 'node:path';

const { create } = archiver;

/**
 * 压缩源目录到目标文件路径
 *
 * @param source 源目录路径
 * @param target 目标文件路径
 */
export const archive = async (source: string, target: string) => {

  const stream = create('zip', { zlib: { level: 0 } });

  // 创建写入流
  await ensureFile(target);
  await ensureDir(dirname(target));
  const output = createWriteStream(target);
  const promise = new Promise<void>(
    (resolve, reject) => {
      output.once('finish', () => {
        logger.info(`已压缩目录 "${source}" 到 "${target}"`);
        resolve();
      });
      output.once('error', () => {
        logger.error(`压缩目录 "${source}" 到 "${target}" 失败`);
        reject();
      });
    },
  );

  // 输出到文件
  stream.pipe(output);
  stream.directory(source, '');
  stream.finalize();

  return promise;

};
