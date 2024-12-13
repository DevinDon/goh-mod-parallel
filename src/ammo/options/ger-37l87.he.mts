import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-37l87.he.ammo',
  type: 'he',
  tags: [ '37to40', 'no_throw', 'size2', 'auto' ],
  entity: '37mm_ger_auto_he',
  mass: 1.5,
  fill: 0.14,
  caliber: 37,
  speed: 0,
  view: {
    name: 'howitzer_shell_37-50',
    tail: 'shell_tracer_37_he',
  },
  inventory: {
    limit: 100,
    size: { width: 2, height: 3 },
    block: 10,
  },
  extra: [],
};

export default options;
