import { type AmmoOptions } from '../../../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-20l55.apcr.ammo',
  type: 'apcr',
  tags: [ '20to25', 'zenite', 'size1', 'auto' ],
  entity: '20mm_ger_auto_apcr',
  mass: 0.275,
  caliber: 20,
  speed: 1050,
  view: {
    name: 'howitzer_shell_dummy',
    tail: 'shell_tracer_20_apcr',
  },
  inventory: {
    limit: 100,
    size: { width: 2, height: 2 },
    block: 10,
  },
  extra: [],
};

export default options;
