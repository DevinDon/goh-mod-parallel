import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-75l24.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size2', '75to76', 'no_throw' ],
  entity: '75mm_ger_l24_he',
  mass: 5.71,
  fill: 0.095,
  caliber: 75,
  speed: 450,
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
