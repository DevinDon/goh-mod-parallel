import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-128l61.apcbche.ammo',
  type: 'apcbche',
  tags: [ 'shell', 'size3', '122to128' ],
  entity: '88mm_ger_l71_apcbche',
  mass: 39.2,
  fill: 0.784,
  caliber: 128,
  speed: 920,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_128_ap',
  },
  inventory: {
    size: { width: 12, height: 2 },
  },
  extra: [],
};

export default options;
