import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-88l56.apcbche.ammo',
  type: 'apcbche',
  tags: [ 'shell', 'size2', '88to105_he_filler' ],
  entity: '88mm_ger_l56_apcbc',
  mass: 20.86,
  fill: 0.101,
  caliber: 88,
  speed: 0,
  view: {
    name: 'howitzer_shell_88-100',
    tail: 'shell_tracer_88_ap',
  },
  inventory: {
    size: { width: 7, height: 1 },
  },
  extra: [],
};

export default options;
