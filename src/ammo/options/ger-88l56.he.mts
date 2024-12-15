import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-88l56.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size2', '88to105', 'no_throw' ],
  entity: '88mm_ger_l56_he',
  mass: 19.96,
  fill: 1.221,
  caliber: 88,
  speed: 820,
  view: {
    name: 'howitzer_shell_88-100',
    tail: 'shell_tracer_75-88_he',
  },
  inventory: {
    size: { width: 7, height: 1 },
  },
  extra: [],
};

export default options;
