import type { CrewOptions } from '../options.mjs';

/** 生成乘员配置 */
export const generateCrew = ({ name, animation, door, bone, visor, turnoff = [ 'shadow', 'sensor', 'targetable 1' ] }: CrewOptions) => {

  const visorLine = visor
    ? `{visor "${visor}"}`
    : '; no visor';

  const turnoffLine = turnoff
    ? `{turnoff ${turnoff.map(feature => `{${feature}}`).join(' ')}}`
    : '; no turnoff';

  return `{Placer
  {Place "${name}"
    {group "crew"}
    {linkbone "${bone}"}
    ${turnoffLine}
    ${visorLine}
  }
}
{Boarder
  {door "${door}"}
  {link "${door}" "${name}" {anm "${animation}"} {forward putoff} {reverse puton}}
}`;

};
