import { setIndent } from '../../utils/set-indent.mjs';
import type { CrewAndPassengerOptions } from '../options.mjs';
import { generateAnimation } from './animation-generator.mjs';
import { generateCrew } from './crew-generator.mjs';
import { generatePassenger } from './passenger-generator.mjs';
import { generateVisor } from './visor-generator.mjs';

/** 生成载具乘员及乘客配置 */
export const generateCrewAndPassenger = ({ visors, animations, crews, passengers, extra }: CrewAndPassengerOptions) => {

  const visorsText = visors?.length
    ? visors.map(generateVisor).join('\n')
    : '; no visors';

  const animationsText = animations?.length
    ? animations.map(generateAnimation).join('\n')
    : '; no animations';

  const crewsText = crews?.length
    ? crews.map(generateCrew).join('\n')
    : '; no crew';

  const passengersText = passengers?.length
    ? passengers.map(generatePassenger).join('\n')
    : '; no passenger';

  const extraText = extra?.length
    ? extra.join('\n')
    : '; no extra';

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

; set extra
${extraText}
`;

};
