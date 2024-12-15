import { i0lines } from '../../utils/set-indent.mjs';
import { type VisorOptions } from '../options.mjs';

/** 生成视角配置 */
export const generateVisor = ({ name, bone, preset }: VisorOptions) => (
  i0lines(
    `; visor ${name}`,
    `{Visor "${name}"`,
    `  {Bone "${bone}"}`,
    `  {Vision "${preset}"}`,
    '}',
  )
);
