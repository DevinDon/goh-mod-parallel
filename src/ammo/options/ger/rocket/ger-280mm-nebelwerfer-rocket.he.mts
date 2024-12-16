import { type AmmoOptions } from '../../../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/rocket/ger-280mm-nebelwerfer-rocket.he.ammo',
  type: 'he-rocket',
  tags: [ 'big', 'bomb', 'mortar', 'he', 'fg', 'itemin2hands', 'arty' ],
  entity: '280mm_nebelwerfer',
  mass: 82,
  fill: 50,
  caliber: 280,
  speed: 230,
  view: {
    name: '280mm_nebelwerfer',
    tail: 'rocket_smoke_nebel',
  },
};

export default options;
