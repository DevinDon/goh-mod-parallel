import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/car/bmw_r71/crew-and-passenger.ext',

  visors: [
    {
      name: 'driver',
      bone: 'driver',
      preset: 'standard-vision-around',
    },
    {
      name: 'gunner',
      bone: 'gunner',
      preset: 'standard-vision-medium',
    },
  ],

  animations: [
    {
      name: 'driver',
      forward: {
        base: [ 'doorleft1', 1 ],
        begin: [ 'board_moto_driver', 1 ],
        end: [ 'pose_moto_driver', 1 ],
      },
      backward: {
        base: [ 'doorleft1', -1 ],
        end: [ 'board_moto_driver', -1 ],
      },
    },
    {
      name: 'gunner',
      forward: {
        begin: [ 'board_moto_sidecar', 1 ],
        end: [ 'pose_moto_sidecar', 1 ],
      },
      backward: {
        end: [ 'board_moto_sidecar', -1 ],
      },
    },
    {
      name: 'passenger',
      forward: {
        begin: [ 'board_moto_passenger', 1 ],
        end: [ 'pose_moto_passenger', 1 ],
      },
      backward: {
        end: [ 'board_moto_passenger', -1 ],
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
    {
      name: 'gunner',
      animations: [
        { door: 'emit2', animation: 'gunner' },
      ],
      bone: 'gunner',
      visor: 'gunner',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
  ],

  passengers: [
    {
      name: 'passenger',
      animations: [
        { door: 'emit3', animation: 'passenger' },
      ],
      bone: 'seat1',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
  ],

};

export default options;
