import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-50l42.apcr.ammo',
  type: 'apcr',
  tags: [ 'shell', 'size1', '50to57' ],
  entity: '50mm_ger_l42_apcr',
  mass: 2.65,
  caliber: 50,
  speed: 1150,
  view: {
    name: 'howitzer_shell_50-75_small',
    tail: 'shell_tracer_50s_apcr',
  },
  inventory: {
    size: { width: 4, height: 1 },
  },
  extra: [],
};

export default options;
