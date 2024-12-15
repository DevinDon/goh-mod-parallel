import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-50l60.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size1', '50to57', 'no_throw' ],
  entity: '50mm_ger_l60_he',
  mass: 3.1,
  fill: 0.51,
  caliber: 50,
  speed: 550,
  view: {
    name: 'howitzer_shell_50-75',
    tail: 'shell_tracer_37-57_he',
  },
  inventory: {
    size: { width: 5, height: 1 },
  },
  extra: [],
};

export default options;
