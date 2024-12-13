import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-75l48.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size2', '75to76', 'no_throw' ],
  entity: '75mm_ger_l43_he',
  mass: 8.71,
  fill: 0.619,
  caliber: 75,
  speed: 0,
  view: {
    name: 'howitzer_shell_50-75',
    tail: 'shell_tracer_75-88_he',
  },
  inventory: {
    size: { width: 6, height: 1 },
  },
  extra: [],
};

export default options;
