import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-50l42.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size1', '50to57', 'no_throw' ],
  entity: '50mm_ger_l42_he',
  mass: 3.05,
  fill: 0.19,
  caliber: 50,
  speed: 550,
  view: {
    name: 'howitzer_shell_50-75_small',
    tail: 'shell_tracer_37-57_he',
  },
  inventory: {
    size: { width: 4, height: 1 },
  },
  extra: [],
};

export default options;
