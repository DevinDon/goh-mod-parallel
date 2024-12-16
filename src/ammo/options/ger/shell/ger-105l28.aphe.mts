import { type AmmoOptions } from '../../../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-105l28.aphe.ammo',
  type: 'aphe',
  tags: [ 'shell', 'size3', '88to105_he_filler' ],
  entity: '105mm_ger_aphe',
  mass: 15.19,
  fill: 0.195,
  caliber: 105,
  speed: 390,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_105_ap',
  },
  inventory: {
    size: { width: 10, height: 2 },
  },
  extra: [],
};

export default options;
