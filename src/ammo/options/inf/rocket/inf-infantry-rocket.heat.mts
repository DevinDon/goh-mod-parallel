import { type AmmoOptions } from '../../../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/49-inf/resource/set/stuff/standard/ammo/rocket/inf-infantry-rocket.heat.ammo',
  type: 'heat-rocket',
  tags: [ 'heat' ],
  entity: 'panzershreck_ammo',
  mass: 3.3,
  fill: 0.5,
  caliber: 100,
  speed: 150,
  view: {
    name: 'panzershreck_ammo',
    tail: 'bazooka_tail_rpzb',
  },
};

export default options;
