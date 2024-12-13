import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-37l45.aphe.ammo',
  type: 'aphe',
  tags: [ 'shell', 'size1', '37to47_he_filler' ],
  entity: '37mm_ger_aphe',
  mass: 1.31,
  fill: 0.06,
  caliber: 37,
  speed: 740,
  view: {
    name: 'howitzer_shell_37-50',
    tail: 'shell_tracer_37_ap',
  },
  inventory: {
    size: { width: 3, height: 1 },
  },
  extra: [],
};

export default options;
