import { type AmmoOptions } from '../../../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/rocket/ger-panzerfaust-100-rocket.heat.ammo',
  type: 'heat-rocket',
  tags: [ 'heat' ],
  entity: 'panzerfaust_100_ammo',
  mass: 2.6,
  fill: 0.3,
  caliber: 100,
  speed: 150,
  inventory: {
    limit: 10,
    size: { width: 2, height: 1 },
    block: 1,
  },
  view: {
    name: 'panzerfaust_100_ammo',
    tail: 'bazooka_tail_rpzb',
  },
};

export default options;
