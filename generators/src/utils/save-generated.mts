import { logger } from '@pipers/logger';
import { saveFile } from '@pipers/toolbox/filesystem';
import { TaskQueue } from '@pipers/toolbox/task-queue';
import { resolve } from 'node:path';
import { CurrentModDir } from './constants.mjs';

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
      const path = resolve(CurrentModDir, destination);
      await saveFile(path, content);
      logger.info(`已保存配置文件到 "${destination}"`);
    },
  );

  // 执行保存任务
  new TaskQueue(tasks).start();

};
