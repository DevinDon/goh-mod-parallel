import { i0lines, i2lines } from '../../utils/set-indent.mjs';
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
    `; passenger ${name}`,
    '{Placer',
    i2lines(
      `{Place "${name}"`,
      i2lines(
        '{group "passenger"}',
        boneLine,
        turnoffLine,
        extraLines,
      ),
      '}',
    ),
    '}',
    '{Boarder',
    i2lines(animationLines),
    '}',
  );

};
