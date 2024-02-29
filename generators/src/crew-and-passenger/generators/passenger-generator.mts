import { setIndent } from '../../utils/set-indent.mjs';
import type { PassengerOptions } from '../options.mjs';

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

  const animationLines = animations
    .map(
      ({ door, animation }) => `{door "${door}"}\n{link "${door}" "${name}" {anm "${animation}"} {forward putoff} {reverse puton}}`,
    )
    .map(line => setIndent(line, { indent: 2, indentFirstLine: false }))
    .join('\n');

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
