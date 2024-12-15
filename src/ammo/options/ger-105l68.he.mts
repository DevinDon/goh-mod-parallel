import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-105l68.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size3', '88to105' ],
  entity: '88mm_ger_l56_he',
  mass: 28.5,
  fill: 1.976,
  caliber: 105,
  speed: 750,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_100-152_he_long',
  },
  inventory: {
    size: { width: 10, height: 2 },
  },
  extra: [],
};

export default options;
