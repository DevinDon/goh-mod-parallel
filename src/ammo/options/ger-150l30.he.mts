import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-150l30.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size4', '150to152', 'arty' ],
  entity: '150mm_ger_l30_he',
  mass: 44.62,
  fill: 8.51,
  caliber: 150,
  speed: 204,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_100-152_he',
  },
  inventory: {
    size: { width: 8, height: 3 },
  },
  extra: [],
};

export default options;
