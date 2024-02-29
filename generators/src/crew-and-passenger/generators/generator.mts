import { setIndent } from '../../utils/set-indent.mjs';
import type { CrewAndPassengerOptions } from '../options.mjs';
import { generateAnimation } from './animation-generator.mjs';
import { generateCrew } from './crew-generator.mjs';
import { generatePassenger } from './passenger-generator.mjs';
import { generateVisor } from './visor-generator.mjs';

/** 生成载具乘员及乘客配置 */
export const generateCrewAndPassenger = ({ visors, animations, crews, passengers }: CrewAndPassengerOptions) => {

  const visorsText = visors.map(generateVisor).join('\n');

  const animationsText = animations.map(generateAnimation).join('\n');

  const crewsText = crews.map(generateCrew).join('\n');

  const passengersText = passengers.map(generatePassenger).join('\n');

  return `; crew and passenger

; set visors
{Sensor
  ${setIndent(visorsText, { indent: 2, indentFirstLine: false })}
}

; set animations
{Boarder
  ${setIndent(animationsText, { indent: 2, indentFirstLine: false })}
}

; set crews
${crewsText}

; set passengers
${passengersText}
`;

};
