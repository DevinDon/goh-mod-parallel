import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-30l38.aphe.ammo',
  type: 'aphe',
  tags: [ '37to40', 'zenite', 'size2', 'auto' ],
  entity: '30mm_ger_auto_apcr',
  mass: 0.5,
  fill: 0.04,
  caliber: 30,
  speed: 860,
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
