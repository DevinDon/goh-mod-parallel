import { i0lines } from '../../../utils/formatter.mjs';

type SetTrackOrWheelOptions = {
  position: string;
  index: number;
  thickness: number;
};

const setTrackOrWheel = (options: SetTrackOrWheelOptions) => {

  const { position, index, thickness } = options;

  return i0lines(
    `{volume "track${position}${index}"`,
    '  {tags "mover" "track"}',
    `  {thickness ${thickness}}`,
    `  {component "track${position}"}`,
    '}',
  );

};

export type SetTrackOptions = {
  thickness: number;
  repair: number;
};

export const setTrack = (options: SetTrackOptions) => {

  const { thickness, repair } = options;

  return i0lines(
    '{volume "trackleft"',
    `  {thickness ${thickness}}`,
    '  {tags "mover" "track"}',
    '  {able {NoWoundDecal} {holed} {contact_ground 0}}',
    '}',
    '{volume "trackright"',
    `  {thickness ${thickness}}`,
    '  {tags "mover" "track"}',
    '  {able {NoWoundDecal} {holed} {contact_ground 0}}',
    '}',
    setTrackOrWheel({ position: 'left', index: 1, thickness }),
    setTrackOrWheel({ position: 'left', index: 2, thickness }),
    setTrackOrWheel({ position: 'left', index: 3, thickness }),
    setTrackOrWheel({ position: 'left', index: 4, thickness }),
    setTrackOrWheel({ position: 'left', index: 5, thickness }),
    setTrackOrWheel({ position: 'left', index: 6, thickness }),
    setTrackOrWheel({ position: 'left', index: 7, thickness }),
    setTrackOrWheel({ position: 'left', index: 8, thickness }),
    setTrackOrWheel({ position: 'left', index: 9, thickness }),
    setTrackOrWheel({ position: 'left', index: 10, thickness }),
    setTrackOrWheel({ position: 'left', index: 11, thickness }),
    setTrackOrWheel({ position: 'left', index: 12, thickness }),
    setTrackOrWheel({ position: 'left', index: 13, thickness }),
    setTrackOrWheel({ position: 'left', index: 14, thickness }),
    setTrackOrWheel({ position: 'left', index: 15, thickness }),
    setTrackOrWheel({ position: 'left', index: 16, thickness }),
    setTrackOrWheel({ position: 'left', index: 17, thickness }),
    setTrackOrWheel({ position: 'left', index: 18, thickness }),
    setTrackOrWheel({ position: 'right', index: 1, thickness }),
    setTrackOrWheel({ position: 'right', index: 2, thickness }),
    setTrackOrWheel({ position: 'right', index: 3, thickness }),
    setTrackOrWheel({ position: 'right', index: 4, thickness }),
    setTrackOrWheel({ position: 'right', index: 5, thickness }),
    setTrackOrWheel({ position: 'right', index: 6, thickness }),
    setTrackOrWheel({ position: 'right', index: 7, thickness }),
    setTrackOrWheel({ position: 'right', index: 8, thickness }),
    setTrackOrWheel({ position: 'right', index: 9, thickness }),
    setTrackOrWheel({ position: 'right', index: 10, thickness }),
    setTrackOrWheel({ position: 'right', index: 11, thickness }),
    setTrackOrWheel({ position: 'right', index: 12, thickness }),
    setTrackOrWheel({ position: 'right', index: 13, thickness }),
    setTrackOrWheel({ position: 'right', index: 14, thickness }),
    setTrackOrWheel({ position: 'right', index: 15, thickness }),
    setTrackOrWheel({ position: 'right', index: 16, thickness }),
    setTrackOrWheel({ position: 'right', index: 17, thickness }),
    setTrackOrWheel({ position: 'right', index: 18, thickness }),
    '{component "trackleft"',
    `  {RepairTime ${repair}}`,
    '  {tags "mover" "track"}',
    '  {RepairOrder 4}',
    '}',
    '{component "trackright"',
    `  {RepairTime ${repair}}`,
    '  {tags "mover" "track"}',
    '  {RepairOrder 4}',
    '}',
  );

};
