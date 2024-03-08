import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/btr/sdkfz251d_17/crew-and-passenger.ext',

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
      preset: 'standard-vehicle-vision-narrow',
    },
    {
      name: 'standard-visor-gunner',
      bone: 'foresight1',
      preset: 'standard-vehicle-vision-narrow',
    },
  ],

  animations: [
    {
      name: 'driver',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_driver_board', 1 ],
        end: [ 'halftrack_driver_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'gunner',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_gunner_board', 1 ],
        end: [ 'seat_sdkfz251_flame_gunner', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'charger',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'board_sd232_driver', 1 ],
        end: [ 'seat_251_21_charger', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger01',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_commander_board', 1 ],
        end: [ 'halftrack_commander_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger02',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_pass_l_03_board', 1 ],
        end: [ 'halftrack_pass_l_03_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger03',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_pass_r_03_board', 1 ],
        end: [ 'halftrack_pass_r_03_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger04',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_pass_l_04_board', 1 ],
        end: [ 'halftrack_pass_l_04_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger05',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_pass_r_04_board', 1 ],
        end: [ 'halftrack_pass_r_04_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
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
      turnoff: [ 'shadow', 'sensor' ],
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

  passengers: [
    {
      name: 'passenger01',
      animations: [
        { door: 'emit1', animation: 'passenger01' },
      ],
      bone: 'seat1',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger02',
      animations: [
        { door: 'emit2', animation: 'passenger02' },
      ],
      bone: 'seat2',
      turnoff: [ 'shadow' ],
    },
    {
      name: 'passenger03',
      animations: [
        { door: 'emit1', animation: 'passenger03' },
      ],
      bone: 'seat3',
      turnoff: [ 'shadow' ],
    },
    {
      name: 'passenger04',
      animations: [
        { door: 'emit2', animation: 'passenger04' },
      ],
      bone: 'seat4',
      turnoff: [ 'shadow' ],
    },
    {
      name: 'passenger05',
      animations: [
        { door: 'emit1', animation: 'passenger05' },
      ],
      bone: 'seat5',
      turnoff: [ 'shadow' ],
    },
  ],

};

export default options;
