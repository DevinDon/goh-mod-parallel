import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-105l28.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size3', '88to105', 'arty' ],
  entity: '105mm_ger_he',
  mass: 15.3,
  fill: 2.111,
  caliber: 105,
  speed: 470,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_100-152_he_long',
  },
  inventory: {
    size: { width: 10, height: 2 },
  },
  extra: [],
};

export default options;
