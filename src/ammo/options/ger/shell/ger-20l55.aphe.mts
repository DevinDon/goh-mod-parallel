import { type AmmoOptions } from '../../../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-20l55.aphe.ammo',
  type: 'aphe',
  tags: [ '20to25', 'zenite', 'size1', 'auto' ],
  entity: '20mm_ger_auto_ap',
  mass: 0.3,
  fill: 0.01,
  caliber: 20,
  speed: 805,
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
