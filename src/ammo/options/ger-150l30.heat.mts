import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-150l30.heat.ammo',
  type: 'heat',
  tags: [ 'shell', 'size4', 'size4_heat_shell', 'heat_high' ],
  entity: '150mm_ger_l30_heat',
  mass: 25.71,
  fill: 1.755,
  caliber: 150,
  speed: 460,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_150_heat',
  },
  inventory: {
    size: { width: 8, height: 3 },
  },
  extra: [],
};

export default options;
