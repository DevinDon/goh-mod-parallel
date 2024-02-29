import type { AnimationOptions } from '../options.mjs';

/** 生成动画配置 */
export const generateAnimation = ({ name, forward, backward }: AnimationOptions) => {

  const forwardBaseLine = forward.base
    ? `{base "${forward.base.name}" ${forward.base.direction === 'forward' ? 1 : -1}}`
    : '; no forward animation base';

  const backwardBaseLine = backward.base
    ? `{base "${backward.base.name}" ${backward.base.direction === 'forward' ? 1 : -1}}`
    : '; no backward animation base';

  return `; animation ${name}
{Anm "${name}"
  {forward
    ${forwardBaseLine}
    {begin "${forward.begin.name}" ${forward.begin.direction === 'forward' ? 1 : -1}}
    {end "${forward.end.name}" ${forward.end.direction === 'forward' ? 1 : -1}}
  }
  {reverse
    ${backwardBaseLine}
    {end "${backward.end.name}" ${backward.end.direction === 'forward' ? 1 : -1}}
  }
}`;

};
