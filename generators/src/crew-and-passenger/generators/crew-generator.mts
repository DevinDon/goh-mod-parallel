import { setIndent } from '../../utils/set-indent.mjs';
import type { CrewOptions } from '../options.mjs';

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
    ? setIndent(extra.join('\n'), { indent: 4, indentFirstLine: false })
    : '; no extra';

  const animationLines = setIndent(
    animations
      .map(
        ({ door, animation }) => [
          `{door "${door}"}`,
          `{link "${door}" "${name}" {anm "${animation}"} {forward putoff} {reverse puton}}`,
        ],
      )
      .flat()
      .join('\n'),
    { indent: 2, indentFirstLine: false },
  );

  return `; crew ${name}
{Placer
  {Place "${name}"
    {group "crew"}
    ${boneLine}
    ${turnoffLine}
    ${visorLine}
    ${extraLines}
  }
}
{Boarder
  ${animationLines}
}`;

};
