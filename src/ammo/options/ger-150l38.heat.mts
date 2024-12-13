import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-150l38.heat.ammo',
  type: 'heat',
  tags: [ 'shell', 'size4', 'size4_heat_shell', 'heat_high' ],
  entity: '150mm_ger_l11_he',
  mass: 45.71,
  fill: 2.222,
  caliber: 150,
  speed: 550,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_150_heat',
  },
  inventory: {
    size: { width: 12, height: 3 },
  },
  extra: [],
};

export default options;
