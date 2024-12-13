import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-150l11.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size4', '150to152', 'arty' ],
  entity: '150mm_ger_l11_he',
  mass: 38.41,
  fill: 6.76,
  caliber: 150,
  speed: 0,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_100-152_he_long',
  },
  inventory: {
    size: { width: 8, height: 3 },
  },
  extra: [],
};

export default options;
