import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-75l24.heat.ammo',
  type: 'heat',
  tags: [ 'shell', 'size2', 'size2_heat_shell', 'heat_low' ],
  entity: '75mm_ger_l24_heat',
  mass: 6.44,
  fill: 0.1,
  caliber: 75,
  speed: 0,
  view: {
    name: 'howitzer_shell_50-75',
    tail: 'shell_tracer_75_heat',
  },
  inventory: {
    size: { width: 4, height: 1 },
  },
  extra: [],
};

export default options;
