import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-75l43.apcbche.ammo',
  type: 'apcbche',
  tags: [ 'shell', 'size2', '75to76_he_filler' ],
  entity: '75mm_ger_l43_apcbche',
  mass: 11.52,
  fill: 0.0775,
  caliber: 75,
  speed: 690,
  view: {
    name: 'howitzer_shell_50-75',
    tail: 'shell_tracer_75_ap',
  },
  inventory: {
    size: { width: 6, height: 1 },
  },
  extra: [],
};

export default options;
