import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/car/blitz3_6_art_ammo/crew-and-passenger.ext',

  visors: [
    {
      name: 'driver',
      bone: 'driver',
      preset: 'standard-vision-around',
    },
  ],

  animations: [
    {
      name: 'driver',
      forward: {
        base: [ 'doorleft', 1 ],
        begin: [ 'board_opel_driver', 1 ],
        end: [ 'seat_opel_driver', 1 ],
      },
      backward: {
        base: [ 'doorleft', 1 ],
        end: [ 'board_opel_driver', -1 ],
      },
    },
    {
      name: 'passenger',
      forward: {
        base: [ 'doorright', 1 ],
        begin: [ 'board_big-midcar', 1 ],
        end: [ 'seat_opel_commander', 1 ],
      },
      backward: {
        base: [ 'doorright', 1 ],
        end: [ 'board_big-midcar', -1 ],
      },
    },
  ],

  crews: [
    {
      name: 'driver',
      animations: [
        { door: 'emit1', animation: 'driver' },
      ],
      bone: 'driver',
      visor: 'driver',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
  ],

  passengers: [
    {
      name: 'passenger01',
      animations: [
        { door: 'emit2', animation: 'passenger' },
      ],
      bone: 'commander',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'passenger02',
      animations: [
        { door: 'emit2', animation: 'passenger' },
      ],
      bone: 'commander',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
  ],

};

export default options;
