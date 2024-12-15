import { i0lines, i2lines } from '../../utils/set-indent.mjs';
import { type CrewAndPassengerOptions } from '../options.mjs';
import { generateAnimation } from './animation-generator.mjs';
import { generateCrew } from './crew-generator.mjs';
import { generatePassenger } from './passenger-generator.mjs';
import { generateVisor } from './visor-generator.mjs';

/** 生成载具乘员及乘客配置 */
export const generateCrewAndPassenger = ({ visors, animations, crews, passengers, extra }: CrewAndPassengerOptions) => {

  const visorsLines = visors?.length
    ? i0lines(...visors.map(generateVisor))
    : '; no visors';

  const animationsLines = animations?.length
    ? i0lines(...animations.map(generateAnimation))
    : '; no animations';

  const crewsLines = crews?.length
    ? i0lines(...crews.map(generateCrew))
    : '; no crew';

  const passengersLines = passengers?.length
    ? i0lines(...passengers.map(generatePassenger))
    : '; no passenger';

  const extraLines = extra?.length
    ? i0lines(...extra)
    : '; 无附加内容';

  return i0lines(
    '; crew and passenger',
    '; set visors',
    '{Sensor',
    `  ${i2lines(visorsLines)}`,
    '}',
    '; set animations',
    '{Boarder',
    `  ${i2lines(animationsLines)}`,
    '}',
    '; set crews',
    crewsLines,
    '; set passengers',
    passengersLines,
    '; set extra',
    extraLines,
    '',
  );

};
