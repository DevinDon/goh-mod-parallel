import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-75l70.apcbche.ammo',
  type: 'apcbche',
  tags: [ 'shell', 'size2', '75to76_he_filler' ],
  entity: '75mm_ger_l70_apcbche',
  mass: 14.3,
  fill: 0.0803,
  caliber: 75,
  speed: 935,
  view: {
    name: 'howitzer_shell_50-75',
    tail: 'shell_tracer_75l_ap',
  },
  inventory: {
    size: { width: 7, height: 1 },
  },
  extra: [],
};

export default options;
