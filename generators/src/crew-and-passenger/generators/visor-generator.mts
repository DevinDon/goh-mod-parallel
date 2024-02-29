import type { VisorOptions } from '../options.mjs';

/** 生成视角配置 */
export const generateVisor = ({ name, bone, preset }: VisorOptions) => `{Visor "${name}"
  {Bone "${bone}"}
  {Vision "${preset}"}
}`;
