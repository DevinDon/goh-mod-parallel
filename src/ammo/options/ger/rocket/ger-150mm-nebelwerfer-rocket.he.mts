import { type AmmoOptions } from '../../../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/rocket/ger-150mm-nebelwerfer-rocket.he.ammo',
  type: 'he-rocket',
  tags: [ 'big', 'bomb', 'mortar', 'he', 'fg', 'itemin2hands', 'shell', 'size4', '150to152', 'arty' ],
  entity: '150mm_nebelwerfer',
  mass: 31.75,
  fill: 3.5,
  caliber: 150,
  speed: 340,
  inventory: {
    limit: 10,
  },
  view: {
    name: '150mm_nebelwerfer',
    tail: 'rocket_smoke_nebel',
  },
};

export default options;
