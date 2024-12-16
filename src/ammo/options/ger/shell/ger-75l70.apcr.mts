import { type AmmoOptions } from '../../../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-75l70.apcr.ammo',
  type: 'apcr',
  tags: [ 'shell', 'size2', '75to76' ],
  entity: '75mm_ger_l70_apcr',
  mass: 11.55,
  caliber: 75,
  speed: 1130,
  view: {
    name: 'howitzer_shell_50-75',
    tail: 'shell_tracer_75l_apcr',
  },
  inventory: {
    size: { width: 7, height: 1 },
  },
  extra: [],
};

export default options;
