import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-75l70.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size2', '75to76', 'no_throw' ],
  entity: '75mm_ger_l70_he',
  mass: 11.14,
  fill: 0.777,
  caliber: 75,
  speed: 700,
  view: {
    name: 'howitzer_shell_50-75',
    tail: 'shell_tracer_75-88_he',
  },
  inventory: {
    size: { width: 7, height: 1 },
  },
  extra: [],
};

export default options;
