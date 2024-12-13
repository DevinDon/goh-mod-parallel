import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-150l38.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size4', '150to152' ],
  entity: '150mm_ger_l30_he',
  mass: 44.62,
  fill: 8.51,
  caliber: 150,
  speed: 0,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_100-152_he',
  },
  inventory: {
    size: { width: 12, height: 3 },
  },
  extra: [],
};

export default options;
