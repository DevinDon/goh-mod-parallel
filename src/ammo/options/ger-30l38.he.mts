import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-30l38.he.ammo',
  type: 'he',
  tags: [ '37to40', 'no_throw', 'size2', 'auto', 'zenite' ],
  entity: '30mm_ger_auto_he',
  mass: 0.55,
  fill: 0.1,
  caliber: 30,
  speed: 0,
  view: {
    name: 'howitzer_shell_37-50',
    tail: 'shell_tracer_37_he',
  },
  inventory: {
    limit: 100,
    size: { width: 2, height: 2 },
    block: 10,
  },
  extra: [],
};

export default options;
