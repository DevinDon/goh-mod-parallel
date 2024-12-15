import { i0lines, i2lines } from '../../utils/set-indent.mjs';
import { type CrewAndPassengerOptions } from '../options.mjs';
import { generateAnimation } from './animation-generator.mjs';
import { generateCrew } from './crew-generator.mjs';
import { generatePassenger } from './passenger-generator.mjs';
import { generateVisor } from './visor-generator.mjs';

/** 生成载具乘员及乘客配置 */
export const generateCrewAndPassenger = ({ visors, animations, crews, passengers, extra }: CrewAndPassengerOptions) => {

  const visorsText = visors?.length
    ? i0lines(...visors.map(generateVisor))
    : '; no visors';

  const animationsText = animations?.length
    ? i0lines(...animations.map(generateAnimation))
    : '; no animations';

  const crewsText = crews?.length
    ? i0lines(...crews.map(generateCrew))
    : '; no crew';

  const passengersText = passengers?.length
    ? i0lines(...passengers.map(generatePassenger))
    : '; no passenger';

  const extraText = extra?.length
    ? i0lines(...extra)
    : '; no extra';

  return i0lines(
    '; crew and passenger',
    '',
    '; set visors',
    '{Sensor',
    i2lines(visorsText),
    '}',
    '',
    '; set animations',
    '{Boarder',
    i2lines(animationsText),
    '}',
    '',
    '; set crews',
    crewsText,
    '',
    '; set passengers',
    passengersText,
    '',
    '; set extra',
    extraText,
    '',
  );

};
