import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-105l68.apcr.ammo',
  type: 'apcr',
  tags: [ 'shell', 'size2', '88to105' ],
  entity: '88mm_ger_l56_apcr',
  mass: 25.6,
  caliber: 105,
  speed: 1130,
  view: {
    name: 'howitzer_shell_88-100',
    tail: 'shell_tracer_88_apcr',
  },
  inventory: {
    size: { width: 10, height: 2 },
  },
  extra: [],
};

export default options;
