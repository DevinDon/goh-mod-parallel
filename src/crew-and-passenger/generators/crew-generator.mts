import { i0lines, i2lines } from '../../utils/set-indent.mjs';
import { type CrewOptions } from '../options.mjs';

/** 生成乘员配置 */
export const generateCrew = ({ name, animations, bone, visor, turnoff, extra }: CrewOptions) => {

  const boneLine = bone
    ? `{linkbone "${bone}"}`
    : '; no bone';

  const visorLine = visor
    ? `{visor "${visor}"}`
    : '; no visor';

  const turnoffLine = turnoff?.length
    ? `{turnoff ${turnoff.map(feature => `{${feature}}`).join(' ')}}`
    : '; no turnoff';

  const extraLines = extra?.length
    ? i0lines(...extra)
    : '; no extra';

  const animationLines = i0lines(
    ...animations.map(
      ({ door, animation }) => i0lines(
        `{door "${door}"}`,
        `{link "${door}" "${name}" {anm "${animation}"} {forward putoff} {reverse puton}}`,
      ),
    ),
  );

  return i0lines(
    `; crew ${name}`,
    '{Placer',
    i2lines(
      `{Place "${name}"`,
      i2lines(
        '{group "crew"}',
        `${boneLine}`,
        `${turnoffLine}`,
        `${visorLine}`,
        `${extraLines}`,
      ),
      '}',
    ),
    '}',
    '{Boarder',
    i2lines(animationLines),
    '}',
  );

};
