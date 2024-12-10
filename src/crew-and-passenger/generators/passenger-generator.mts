import { setIndent } from '../../utils/set-indent.mjs';
import { type PassengerOptions } from '../options.mjs';

/** 生成乘客配置 */
export const generatePassenger = ({ name, animations, bone, turnoff, extra }: PassengerOptions) => {

  const boneLine = bone
    ? `{linkbone "${bone}"}`
    : '; no bone';

  const turnoffLine = turnoff?.length
    ? `{turnoff ${turnoff.map(feature => `{${feature}}`).join(' ')}}`
    : '; no turnoff';

  const extraLines = extra?.length
    ? setIndent(extra.join('\n'), { indent: 4, indentFirstLine: true })
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

  return `; passenger ${name}
{Placer
  {Place "${name}"
    {group "passenger"}
    ${boneLine}
    ${turnoffLine}
    ${extraLines}
  }
}
{Boarder
  ${animationLines}
}`;

};
