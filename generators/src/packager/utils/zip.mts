import { create } from 'archiver';
import { createWriteStream, ensureFile } from '@pipers/toolbox/filesystem';

// 使用 zlib 压缩文件夹
export const archive = async (source: string, target: string) => {

  const stream = create('zip', { zlib: { level: 0 } });

  // 创建写入流
  await ensureFile(target);
  const output = createWriteStream(target);

  // 输出到文件
  stream.pipe(output);

};
