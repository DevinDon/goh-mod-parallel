import { i0lines } from '../../utils/formatter.mjs';

export type SetShieldOptions = {
  $options: 'shield';
  /** 挡板名称，对应模型 */
  name: string;
  /** 挡板组件名称 */
  component?: string;
  /** 挡板厚度 */
  thickness: number;
  /** 是否可以被击毁 */
  tear?: boolean;
};

/** 设置挡板，可设置是否可以被击毁 */
export const setShield = (options: SetShieldOptions) => {

  const { name, component = name, thickness, tear = false } = options;

  const tearLine = tear === true
    ? '{tags "cut_part" "shield"}'
    : '{tags "shield"}';

  return i0lines(
    `{volume "${name}"`,
    `  {thickness ${thickness}}`,
    `  ${tearLine}`,
    `  {component "${component}"}`,
    '}',
    `{component "${component}"`,
    '  {RepairTime 5}',
    `  ${tearLine}`,
    '  {RepairOrder 12}',
    '}',
  );

};

export type SetGunShieldOptions = {
  $options: 'gun-shield';
  /** 挡板名称，对应模型 */
  name: string;
  /** 挡板厚度 */
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

export type SetCoverShieldOptions = {
  $options: 'cover-shield';
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
