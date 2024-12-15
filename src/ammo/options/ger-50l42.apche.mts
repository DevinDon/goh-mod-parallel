import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-50l42.apche.ammo',
  type: 'apche',
  tags: [ 'shell', 'size1', '50to57_he_filler' ],
  entity: '50mm_ger_l42_apche',
  mass: 3.45,
  fill: 0.09,
  caliber: 50,
  speed: 835,
  view: {
    name: 'howitzer_shell_50-75_small',
    tail: 'shell_tracer_50s_ap',
  },
  inventory: {
    size: { width: 4, height: 1 },
  },
  extra: [],
};

export default options;
