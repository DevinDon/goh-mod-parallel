import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/car/bmw_r71/crew-and-passenger.ext',

  visors: [
    // 覆盖默认视野，需要同名且占用该连接点才能覆盖
    {
      name: 'main',
      bone: 'foresight1',
      preset: 'standard-vision-none',
    },
    {
      name: 'around',
      bone: 'visor1',
      preset: 'standard-vision-none',
    },
    {
      name: 'driver',
      bone: 'visor2',
      preset: 'standard-vision-none',
    },
    // 重新定义视野
    {
      name: 'standard-visor-driver',
      bone: 'driver',
      preset: 'standard-vision-around',
    },
    {
      name: 'standard-visor-gunner',
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
      visor: 'standard-visor-driver',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'gunner',
      animations: [
        { door: 'emit2', animation: 'gunner' },
      ],
      bone: 'gunner',
      visor: 'standard-visor-gunner',
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
