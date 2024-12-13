import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-75l24.sm.ammo',
  type: 'sm',
  tags: [ 'shell', '75to76', 'smoke_size2' ],
  entity: '75mm_ger_l24_sm',
  mass: 6.16,
  caliber: 75,
  speed: 520,
  view: {
    name: 'howitzer_shell_50-75',
    tail: 'shell_tracer_75-88_he_long',
  },
  inventory: {
    size: { width: 4, height: 1 },
  },
  extra: [],
};

export default options;
