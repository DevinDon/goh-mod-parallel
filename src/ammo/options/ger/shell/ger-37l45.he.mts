import { type AmmoOptions } from '../../../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-37l45.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size1', '37to47', 'no_throw' ],
  entity: '37mm_ger_he',
  mass: 1.31,
  fill: 0.33,
  caliber: 37,
  speed: 680,
  view: {
    name: 'howitzer_shell_37-50',
    tail: 'shell_tracer_37_he',
  },
  inventory: {
    size: { width: 3, height: 1 },
  },
  extra: [],
};

export default options;
