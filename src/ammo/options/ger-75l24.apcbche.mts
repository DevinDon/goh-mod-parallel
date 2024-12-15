import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-75l24.apcbche.ammo',
  type: 'apcbche',
  tags: [ 'shell', 'size2', '75to76_he_filler' ],
  entity: '75mm_ger_l24_apcbche',
  mass: 6.98,
  fill: 0.055,
  caliber: 75,
  speed: 385,
  view: {
    name: 'howitzer_shell_50-75',
    tail: 'shell_tracer_75s_ap',
  },
  inventory: {
    size: { width: 4, height: 1 },
  },
  extra: [],
};

export default options;
