import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-150l38.apcbche.ammo',
  type: 'apcbche',
  tags: [ 'shell', 'size4', '150to152' ],
  entity: '128mm_ger_apcbche',
  mass: 49.2,
  fill: 0.784,
  caliber: 150,
  speed: 0,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_128_ap',
  },
  inventory: {
    size: { width: 12, height: 3 },
  },
  extra: [],
};

export default options;
