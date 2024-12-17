import { i0lines, i2lines } from '../../utils/formatter.mjs';
import { type AnimationOptions } from '../options.mjs';

/** 生成动画配置 */
export const generateAnimation = ({ name, forward, reverse }: AnimationOptions) => {

  const forwardBaseLine = forward?.base
    ? `{base "${forward?.base[0]}" ${forward?.base[1]}}`
    : '; no forward animation base';

  const forwardBeginLine = forward?.begin
    ? `{begin "${forward?.begin[0]}" ${forward?.begin[1]}}`
    : '; no forward animation begin';

  const forwardEndLine = forward?.end
    ? `{end "${forward?.end[0]}" ${forward?.end[1]}}`
    : '; no forward animation end';

  const forwardLines = forward
    ? i0lines(
      '{forward',
      `  ${forwardBaseLine}`,
      `  ${forwardBeginLine}`,
      `  ${forwardEndLine}`,
      '}',
    )
    : '; no forward animation';

  const reverseBaseLine = reverse?.base
    ? `{base "${reverse?.base[0]}" ${reverse?.base[1]}}`
    : '; no reverse animation base';

  const reverseBeginLine = reverse?.begin
    ? `{begin "${reverse?.begin[0]}" ${reverse?.begin[1]}}`
    : '; no reverse animation begin';

  const reverseEndLine = reverse?.end
    ? `{end "${reverse?.end[0]}" ${reverse?.end[1]}}`
    : '; no reverse animation end';

  const reverseLines = reverse
    ? i0lines(
      '{reverse',
      `  ${reverseBaseLine}`,
      `  ${reverseBeginLine}`,
      `  ${reverseEndLine}`,
      '}',
    )
    : '; no reverse animation';

  return i0lines(
    `; animation ${name}`,
    `{Anm "${name}"`,
    `  ${i2lines(forwardLines)}`,
    `  ${i2lines(reverseLines)}`,
    '}',
  );

};
