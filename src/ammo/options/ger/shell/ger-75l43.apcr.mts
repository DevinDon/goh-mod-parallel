import { type AmmoOptions } from '../../../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-75l43.apcr.ammo',
  type: 'apcr',
  tags: [ 'shell', 'size2', '75to76' ],
  entity: '75mm_ger_l43_apcr',
  mass: 8.61,
  caliber: 75,
  speed: 855,
  view: {
    name: 'howitzer_shell_50-75',
    tail: 'shell_tracer_75_apcr',
  },
  inventory: {
    size: { width: 6, height: 1 },
  },
  extra: [],
};

export default options;
