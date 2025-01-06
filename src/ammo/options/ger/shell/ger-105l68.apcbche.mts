import { type AmmoOptions } from '../../../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-105l68.apcbche.ammo',
  type: 'apcbche',
  tags: [ 'shell', 'size3', '88to105_he_filler' ],
  entity: '88mm_ger_l56_apcbc2',
  mass: 32.1,
  fill: 0.182,
  caliber: 105,
  speed: 750,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_105_ap',
  },
  inventory: {
    size: { width: 10, height: 1 },
  },
  extra: [],
};

export default options;
