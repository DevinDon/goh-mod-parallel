import { type AmmoOptions } from '../../../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-150l12.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size4', '150to152', 'arty' ],
  entity: '150mm_ger_l11_he',
  mass: 38.41,
  fill: 7.34,
  caliber: 150,
  speed: 280,
  view: {
    name: 'howitzer_shell_105-150',
    tail: 'shell_tracer_100-152_he_long',
  },
  inventory: {
    size: { width: 8, height: 3 },
  },
  extra: [],
};

export default options;
