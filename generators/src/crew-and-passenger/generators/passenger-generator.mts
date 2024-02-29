import type { PassengerOptions } from '../options.mjs';

/** 生成乘客配置 */
export const generatePassenger = ({ name, animation, door, bone, turnoff = [ 'shadow', 'sensor', 'targetable 1' ] }: PassengerOptions) => {

  const turnoffLine = turnoff
    ? `{turnoff ${turnoff.map(feature => `{${feature}}`).join(' ')}}`
    : '; no turnoff';

  return `{Placer
  {Place "${name}"
    {group "passenger"}
    {linkbone "${bone}"}
    ${turnoffLine}
  }
}
{Boarder
  {door "${door}"}
  {link "${door}" "${name}" {anm "${animation}"} {forward putoff} {reverse puton}}
}`;

};
