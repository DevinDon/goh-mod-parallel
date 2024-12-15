import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-15l84.aphe.ammo',
  type: 'aphe',
  tags: [ '20to25', 'zenite', 'auto', 'size1', 'bullet_fx' ],
  entity: '15mm_ger_auto_ap',
  mass: 0.32,
  fill: 0.01,
  caliber: 15,
  speed: 960,
  view: {
    name: 'howitzer_shell_dummy',
    tail: 'shell_tracer_20_ap',
  },
  inventory: {
    limit: 100,
    size: { width: 2, height: 2 },
    block: 10,
  },
  extra: [],
};

export default options;
