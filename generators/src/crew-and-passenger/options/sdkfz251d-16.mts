import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/btr/sdkfz251d_16/crew-and-passenger.ext',

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
      name: 'gunner1',
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
      name: 'gunner2',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'board_sd232_driver', 1 ],
        end: [ 'pose_mgun_251', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger',
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
      name: 'gunner1',
      animations: [
        { door: 'emit2', animation: 'gunner1' },
      ],
      bone: 'gunner1',
      visor: 'standard-visor-gunner',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'gunner2',
      animations: [
        { door: 'emit2', animation: 'gunner2' },
      ],
      bone: 'gunner2',
      visor: 'standard-visor-gunner',
      turnoff: [ 'shadow', 'sensor' ],
    },
  ],

  passengers: [
    {
      name: 'passenger',
      animations: [
        { door: 'emit1', animation: 'passenger' },
      ],
      bone: 'seat9',
      turnoff: [ 'shadow', 'sensor' ],
    },
  ],

};

export default options;
