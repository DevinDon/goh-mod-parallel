import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-50l60.apche.ammo',
  type: 'apche',
  tags: [ 'shell', 'size1', '50to57_he_filler' ],
  entity: '50mm_ger_l60_apche',
  mass: 3.49,
  fill: 0.057,
  caliber: 50,
  speed: 835,
  view: {
    name: 'howitzer_shell_50-75',
    tail: 'shell_tracer_50l_ap',
  },
  inventory: {
    size: { width: 5, height: 1 },
  },
  extra: [],
};

export default options;
