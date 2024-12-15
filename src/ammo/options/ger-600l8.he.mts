import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-600l8.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size7', '150to152', 'arty' ],
  entity: '600mm_ger_he',
  mass: 2170,
  fill: 200,
  caliber: 600,
  speed: 200,
  view: {
    name: '600mm_ger_he',
    tail: 'shell_tracer_600',
  },
  inventory: {
    limit: 1,
    size: { width: 12, height: 4 },
  },
  extra: [],
};

export default options;
