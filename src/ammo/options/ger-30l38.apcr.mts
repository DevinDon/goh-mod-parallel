import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-30l38.apcr.ammo',
  type: 'apcr',
  tags: [ '37to40', 'zenite', 'size2', 'auto' ],
  entity: '30mm_ger_auto_apcr',
  mass: 0.335,
  caliber: 30,
  speed: 960,
  view: {
    name: 'howitzer_shell_37-50',
    tail: 'shell_tracer_37_ap',
  },
  inventory: {
    limit: 100,
    size: { width: 2, height: 2 },
    block: 10,
  },
  extra: [],
};

export default options;
