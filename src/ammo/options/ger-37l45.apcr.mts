import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-37l45.apcr.ammo',
  type: 'apcr',
  tags: [ 'shell', 'size1', '37to47' ],
  entity: '37mm_ger_apcr',
  mass: 0.95,
  caliber: 37,
  speed: 0,
  view: {
    name: 'howitzer_shell_37-50',
    tail: 'shell_tracer_37_apcr',
  },
  inventory: {
    size: { width: 3, height: 1 },
  },
  extra: [],
};

export default options;
