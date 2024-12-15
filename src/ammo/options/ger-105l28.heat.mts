import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-105l28.heat.ammo',
  type: 'heat',
  tags: [ 'shell', 'size3', 'size3_heat_shell', 'heat_medium' ],
  entity: '105mm_ger_heat',
  mass: 13.37,
  fill: 0.755,
  caliber: 105,
  speed: 496,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_100-152_he',
  },
  inventory: {
    size: { width: 10, height: 2 },
  },
  extra: [],
};

export default options;
