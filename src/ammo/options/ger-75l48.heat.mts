import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-75l48.heat.ammo',
  type: 'heatc',
  tags: [ 'shell', 'size2', 'size2_heat_shell', 'heat_medium' ],
  entity: '75mm_ger_l43_heat',
  mass: 7.96,
  fill: 0.275,
  caliber: 75,
  speed: 0,
  view: {
    name: 'howitzer_shell_50-75',
    tail: 'shell_tracer_75_heat',
  },
  inventory: {
    size: { width: 6, height: 1 },
  },
  extra: [],
};

export default options;
