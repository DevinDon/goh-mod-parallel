import { i0lines, i2lines } from '../../utils/set-indent.mjs';
import { type CrewOptions } from '../options.mjs';

/** 生成乘员配置 */
export const generateCrew = ({ name, animations, bone, visor, turnoff, extra }: CrewOptions) => {

  const boneLine = bone
    ? `{linkbone "${bone}"}`
    : '; no bone';

  const turnoffLine = turnoff?.length
    ? `{turnoff ${turnoff.map(feature => `{${feature}}`).join(' ')}}`
    : '; no turnoff';

  const visorLine = visor
    ? `{visor "${visor}"}`
    : '; no visor';

  const extraLines = extra?.length
    ? i0lines(...extra)
    : '; 无附加内容';

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
    `  {Place "${name}"`,
    '    {group "crew"}',
    `    ${i2lines(i2lines(boneLine))}`,
    `    ${i2lines(i2lines(turnoffLine))}`,
    `    ${i2lines(i2lines(visorLine))}`,
    `    ${i2lines(i2lines(extraLines))}`,
    '  }',
    '}',
    '{Boarder',
    `  ${i2lines(animationLines)}`,
    '}',
  );

};
