import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-128l61.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size3', '122to128' ],
  entity: '88mm_ger_l71_he',
  mass: 36.9,
  fill: 4.083,
  caliber: 128,
  speed: 750,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_100-152_he',
  },
  inventory: {
    size: { width: 12, height: 2 },
  },
  extra: [],
};

export default options;
