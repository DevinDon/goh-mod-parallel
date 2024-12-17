import { i0lines } from '../../utils/formatter.mjs';

export type SetBulletproofWheelOptions = {
  name: string;
  thickness: number;
  repair: number;
};

/** 设置防弹轮胎 */
export const setBulletproofWheel = (options: SetBulletproofWheelOptions) => {

  const { name, thickness, repair } = options;

  return i0lines(
    `{volume "${name}"`,
    `  {thickness ${thickness}}`,
    '  {tags "wheel"}',
    `  {component "${name}"}`,
    '  {able {NoWoundDecal}}',
    '}',
    `{component "${name}"`,
    `  {RepairTime ${repair}}`,
    '  {tags "wheel"}',
    '  {RepairOrder 10}',
    '}',
  );
};

/** 设置实心轮胎 */
export const setSolidWheel = (name: string) => (
  i0lines(
    `{volume "${name}"`,
    '  {thickness 10}',
    '  {tags "wheel" "no_target"}',
    `  {component "${name}"}`,
    '  {able {NoWoundDecal}}',
    '}',
    `{component "${name}"`,
    '  {RepairTime 10}',
    '  {tags "wheel" "no_target"}',
    '  {RepairOrder 10}',
    '}',
  )
);

/** 设置轮胎 */
export const setWheel = (name: string) => (
  i0lines(
    `{volume "${name}"`,
    '  {thickness 0.5}',
    '  {tags "wheel"}',
    `  {component "${name}"}`,
    '  {able {NoWoundDecal}}',
    '}',
    `{component "${name}"`,
    '  {RepairTime 10}',
    '  {tags "wheel"}',
    '  {RepairOrder 10}',
    '}',
  )
);
