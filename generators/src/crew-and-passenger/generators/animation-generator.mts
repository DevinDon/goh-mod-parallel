import type { AnimationOptions } from '../options.mjs';

/** 生成动画配置 */
export const generateAnimation = ({ name, forward, backward }: AnimationOptions) => {

  const forwardBaseLine = forward.base
    ? `{base "${forward.base[0]}" ${forward.base[1]}}`
    : '; no forward animation base';

  const forwardBeginLine = forward.begin
    ? `{begin "${forward.begin[0]}" ${forward.begin[1]}}`
    : '; no forward animation begin';

  const forwardEndLine = forward.end
    ? `{end "${forward.end[0]}" ${forward.end[1]}}`
    : '; no forward animation end';

  const backwardBaseLine = backward.base
    ? `{base "${backward.base[0]}" ${backward.base[1]}}`
    : '; no backward animation base';

  const backwardBeginLine = backward.begin
    ? `{begin "${backward.begin[0]}" ${backward.begin[1]}}`
    : '; no backward animation begin';

  const backwardEndLine = backward.end
    ? `{end "${backward.end[0]}" ${backward.end[1]}}`
    : '; no backward animation end';

  return `; animation ${name}
{Anm "${name}"
  {forward
    ${forwardBaseLine}
    ${forwardBeginLine}
    ${forwardEndLine}
  }
  {reverse
    ${backwardBaseLine}
    ${backwardBeginLine}
    ${backwardEndLine}
  }
}`;

};
