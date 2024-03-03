import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/btr/sdkfz234_4/crew-and-passenger.ext',

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
      bone: 'visor2',
      preset: 'standard-vision-narrow',
    },
    {
      name: 'standard-visor-gunner',
      bone: 'foresight1',
      preset: 'standard-vision-narrow',
    },
    {
      name: 'standard-visor-commander',
      bone: 'visor1',
      preset: 'standard-vision-around',
    },
  ],

  animations: [
    {
      name: 'commander',
      forward: {
        begin: [ 'board_sd222_driver', 1 ],
        end: [ 'seat_sdkfz234_commander', 1 ],
      },
      reverse: {
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'driver',
      forward: {
        begin: [ 'board_sd222_driver', 1 ],
        end: [ 'seat_sdkfz234_driver', 1 ],
      },
      reverse: {
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'gunner',
      forward: {
        begin: [ 'board_sd222_driver', 1 ],
        end: [ 'seat_sdkfz234_gunner', 1 ],
      },
      reverse: {
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'charger',
      forward: {
        begin: [ 'board_sd222_driver', 1 ],
        end: [ 'seat_sdkfz234_charger', 1 ],
      },
      reverse: {
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
  ],

  crews: [
    {
      name: 'commander',
      animations: [
        { door: 'emit2', animation: 'commander' },
      ],
      bone: 'commander',
      visor: 'standard-visor-commander',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'driver',
      animations: [
        { door: 'emit2', animation: 'driver' },
      ],
      bone: 'driver',
      visor: 'standard-visor-driver',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
    {
      name: 'gunner',
      animations: [
        { door: 'emit1', animation: 'gunner' },
      ],
      bone: 'gunner',
      visor: 'standard-visor-gunner',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'charger',
      animations: [
        { door: 'emit1', animation: 'charger' },
      ],
      bone: 'charger',
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor' ],
    },
  ],

  passengers: [],

};

export default options;
