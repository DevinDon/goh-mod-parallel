import { i0lines, i2lines } from '../../utils/set-indent.mjs';
import { type VisorOptions } from '../options.mjs';

/** 生成视角配置 */
export const generateVisor = ({ name, bone, preset }: VisorOptions) => (
  i0lines(
    `; visor ${name}`,
    `{Visor "${name}"`,
    i2lines(
      `{Bone "${bone}"}`,
      `{Vision "${preset}"}`,
    ),
    '}',
  )
);
