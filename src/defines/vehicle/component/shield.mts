import { i0lines } from '../../../utils/formatter.mjs';

export type SetBulletproofShieldOptions = {
  name: string;
  thickness: number;
  repair: number;
};

/** 设置防弹挡板 */
export const setBulletproofShield = (options: SetBulletproofShieldOptions) => {

  const { name, thickness, repair } = options;

  return i0lines(
    `{volume "${name}"`,
    `  {thickness ${thickness}}`,
    '  {tags "shield"}',
    `  {component "${name}"}`,
    '}',
    `{component "${name}"`,
    `  {RepairTime ${repair}}`,
    '  {tags "shield"}',
    '  {RepairOrder 11}',
    '}',
  );

};

export type SetShieldOptions = {
  name: string;
  thickness: number;
};

/** 设置挡板 */
export const setShield = (options: SetShieldOptions) => {

  const { name, thickness } = options;

  return i0lines(
    `{volume "${name}"`,
    `  {thickness ${thickness}}`,
    '  {tags "shield"}',
    `  {component "${name}"}`,
    '}',
    `{component "${name}"`,
    '  {RepairTime 5}',
    '  {tags "shield"}',
    '  {RepairOrder 12}',
    '}',
  );

};

export type SetTrackShieldOptions = {
  name: string;
  thickness: number;
};

/** 设置履带挡板 */
export const setTrackShield = (options: SetTrackShieldOptions) => {

  const { name, thickness } = options;

  return i0lines(
    `{volume "${name}"`,
    `  {thickness ${thickness}}`,
    '  {tags "shield"}',
    `  {component "${name}"}`,
    '  {CastSteel 1}',
    '}',
    `{component "${name}"`,
    '  {RepairTime 5}',
    '  {tags "shield"}',
    '  {RepairOrder 12}',
    '}',
  );

};

export type SetTearShieldOptions = {
  name: string;
  thickness: number;
};

/** 设置可击毁挡板 */
export const setTearShield = (options: SetTearShieldOptions) => {

  const { name, thickness } = options;

  return i0lines(
    `{volume "${name}"`,
    `  {thickness ${thickness}}`,
    '  {tags "cut_part" "shield"}',
    `  {component "${name}"}`,
    '}',
    `{component "${name}"`,
    '  {RepairTime 1}',
    '  {tags "cut_part" "shield"}',
    '  {RepairOrder 12}',
    '}',
  );

};

export type SetGroupShieldOptions = {
  name: string;
  thickness: number;
  type: string;
};

/** 设置挡板组 */
export const setGroupShield = (options: SetGroupShieldOptions) => {

  const { name, thickness, type } = options;

  return i0lines(
    `{volume "${name}"`,
    `  {thickness ${thickness}}`,
    '  {tags "shield"}',
    `  {component "${type}"}`,
    '}',
    `{component "${type}"`,
    '  {RepairTime 5}',
    '  {tags "shield"}',
    '  {RepairOrder 12}',
    '}',
  );

};

export type SetGunShieldOptions = {
  name: string;
  thickness: number;
};

/** 设置开放式炮塔的挡板 */
export const setGunShield = (options: SetGunShieldOptions) => {

  const { name, thickness } = options;

  return i0lines(
    `{volume "${name}"`,
    `  {thickness ${thickness}}`,
    '  {tags "gun_shield"}',
    '}',
  );

};

/** 设置挡板覆盖 */
export const setCoverShield = () => (
  i0lines(
    '{volume "shield_cover"',
    '  {thickness 0.01}',
    '  {material "fabric"}',
    '  {able {NoWoundDecal}}',
    '  {component "shield_cover"}',
    '}',
    '{volume "shield_cover1"',
    '  {thickness 0.01}',
    '  {material "fabric"}',
    '  {able {NoWoundDecal}}',
    '  {component "shield_cover"}',
    '}',
    '{volume "shield_cover2"',
    '  {thickness 0.01}',
    '  {material "fabric"}',
    '  {able {NoWoundDecal}}',
    '  {component "shield_cover"}',
    '}',
    '{component "shield_cover"',
    '  {RepairTime 5}',
    '  {RepairOrder 12}',
    '}',
  )
);
