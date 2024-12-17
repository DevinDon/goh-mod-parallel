import { i0lines } from '../../../utils/formatter.mjs';

export type SetComponentOptions = {
  name: string;
  type: string;
};

/** 设置组件 */
export const setComponent = (options: SetComponentOptions) => {

  const { name, type } = options;

  return i0lines(
    `{volume "${name}"`,
    `  {component "${type}"}`,
    `  {tags "${type}"}`,
    '}',
  );

};
