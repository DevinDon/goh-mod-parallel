import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/btr/sdkfz234_3/crew-and-passenger.ext',

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
        end: [ 'seat_sdkfz2343_gunner', 1 ],
      },
      reverse: {
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'commander',
      forward: {
        begin: [ 'board_sd222_driver', 1 ],
        end: [ 'seat_sdkfz2343_commander', 1 ],
      },
      reverse: {
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'charger',
      forward: {
        begin: [ 'board_sd222_driver', 1 ],
        end: [ 'seat_sdkfz2343_charger', 1 ],
      },
      reverse: {
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
  ],

  crews: [
    {
      name: 'driver',
      animations: [
        { door: 'emit1', animation: 'driver' },
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
        { door: 'emit2', animation: 'gunner' },
      ],
      bone: 'gunner',
      visor: 'standard-visor-gunner',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'commander',
      animations: [
        { door: 'emit1', animation: 'commander' },
        { door: 'emit2', animation: 'commander' },
      ],
      bone: 'commander',
      visor: 'standard-visor-commander',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'charger',
      animations: [
        { door: 'emit1', animation: 'charger' },
        { door: 'emit2', animation: 'charger' },
      ],
      bone: 'charger',
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
  ],

  passengers: [],

};

export default options;
