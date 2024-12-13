import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-37l87.ap.ammo',
  type: 'ap',
  tags: [ '37to40', 'zenite', 'size2', 'auto' ],
  entity: '37mm_ger_auto_ap',
  mass: 1.57,
  caliber: 37,
  speed: 770,
  view: {
    name: 'howitzer_shell_37-50',
    tail: 'shell_tracer_37_ap',
  },
  inventory: {
    limit: 100,
    size: { width: 2, height: 3 },
    block: 10,
  },
  extra: [],
};

export default options;
