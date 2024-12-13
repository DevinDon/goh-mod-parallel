import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-88l56.apcr.ammo',
  type: 'apcr',
  tags: [ 'shell', 'size2', '88to105' ],
  entity: '88mm_ger_l56_apcr',
  mass: 17.96,
  caliber: 88,
  speed: 930,
  view: {
    name: 'howitzer_shell_88-100',
    tail: 'shell_tracer_88_apcr',
  },
  inventory: {
    size: { width: 7, height: 1 },
  },
  extra: [],
};

export default options;
