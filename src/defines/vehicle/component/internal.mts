import { i0lines } from '../../../utils/formatter.mjs';

export type SetInternalComponentOptions = {
  name: string;
  type: string;
  repair: number;
};

/** 设置内部组件，弹药架等 */
export const setInternalComponent = (options: SetInternalComponentOptions) => {

  const { name, type, repair } = options;

  return i0lines(
    `{volume "${name}"`,
    `  {tags "${type}" "no_target"}`,
    '  {able {Contact 0} {NoWoundDecal}}',
    '  {thickness 2}',
    `  {component "${name}"}`,
    '}',
    `{component "${name}"`,
    `  {RepairTime ${repair}}`,
    `  {tags "${type}"}`,
    '  {RepairOrder 5}',
    '}',
  );
};
