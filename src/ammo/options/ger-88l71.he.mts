import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-88l71.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size2', '88to105', 'no_throw' ],
  entity: '88mm_ger_l71_he',
  mass: 22.47,
  fill: 1.112,
  caliber: 88,
  speed: 0,
  view: {
    name: 'howitzer_shell_88-100',
    tail: 'shell_tracer_75-88_he',
  },
  inventory: {
    size: { width: 8, height: 1 },
  },
  extra: [],
};

export default options;
