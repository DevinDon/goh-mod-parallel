import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-20l55.he.ammo',
  type: 'he',
  tags: [ '20to25', 'no_throw', 'auto', 'size1' ],
  entity: '20mm_ger_auto_he',
  mass: 0.303,
  fill: 0.07,
  caliber: 20,
  speed: 0,
  view: {
    name: 'howitzer_shell_dummy',
    tail: 'shell_tracer_20_he',
  },
  inventory: {
    limit: 100,
    size: { width: 2, height: 2 },
    block: 10,
  },
  extra: [],
};

export default options;
