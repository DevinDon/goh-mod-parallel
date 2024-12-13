import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-88l71.apcbche.ammo',
  type: 'apcbche',
  tags: [ 'shell', 'size2', '88to105_he_filler' ],
  entity: '88mm_ger_l71_apcbche',
  mass: 23.35,
  fill: 0.183,
  caliber: 88,
  speed: 0,
  view: {
    name: 'howitzer_shell_88-100',
    tail: 'shell_tracer_88l_ap',
  },
  inventory: {
    size: { width: 8, height: 1 },
  },
  extra: [],
};

export default options;
