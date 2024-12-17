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

export type PresetLevel = keyof typeof PresetLevel;
export const PresetLevel = {
  Level01: 'Level01',
  Level02: 'Level02',
  Level03: 'Level03',
  Level04: 'Level04',
  Level05: 'Level05',
  Level06: 'Level06',
  Level07: 'Level07',
  Level08: 'Level08',
  Level09: 'Level09',
  Level10: 'Level10',
} as const;
