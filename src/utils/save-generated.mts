import { resolve } from 'node:path';
import { saveFile } from '@pipers/toolbox/node/filesystem';
import { createTaskQueue$ } from '@pipers/toolbox/universal/task-queue';
import { ProjectRootDir } from './constants.mjs';
import { logger } from './logger.mjs';

export type GeneratedOptions = {
  /** 要保存到的路径，相对于当前模组的根目录 */
  destination: string;
  /** 要保存的配置文本 */
  content: string;
};

export const saveGenerated = async (options: GeneratedOptions[]) => {

  // 生成保存任务
  const tasks = options.map(
    ({ destination, content }) => async () => {
      const path = resolve(ProjectRootDir, destination);
      await saveFile(path, content);
      logger.info?.(`已保存配置文件到 "${destination}"`);
    },
  );

  // 执行保存任务
  await createTaskQueue$(tasks).start();

};
