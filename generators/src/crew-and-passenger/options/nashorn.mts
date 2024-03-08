import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/tank_medium/nashorn/crew-and-passenger.ext',

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
    {
      name: 'standard-visor-commander',
      bone: 'visor1',
      preset: 'standard-vehicle-vision-around',
    },
  ],

  animations: [
    {
      name: 'commander',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'board_tank_left', 1 ],
        end: [ 'seat_nashorn_commander', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_tank_1', 1 ],
      },
    },
    {
      name: 'driver',
      forward: {
        base: [ 'open_driver', 1 ],
        begin: [ 'board_pz4_driver', 1 ],
        end: [ 'pose_t26_driver', 1 ],
      },
      reverse: {
        base: [ 'open_driver', -1 ],
        end: [ 'board_pz4_driver', -1 ],
      },
    },
    {
      name: 'gunner3',
      forward: {
        begin: [ 'board_MiddleArmor', 1 ],
        end: [ 'pose_t26_driver', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_1', 1 ],
      },
    },
    {
      name: 'left',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'board_tank_left', 1 ],
        end: [ 'seat_nashorn_gunner', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'right',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'board_tank_right', 1 ],
        end: [ 'seat_nashorn_charger', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
  ],

  crews: [
    {
      name: 'commander',
      animations: [
        { door: 'emit1', animation: 'commander' },
        { door: 'emit2', animation: 'commander' },
      ],
      bone: 'commander',
      visor: 'standard-visor-commander',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'driver',
      animations: [
        { door: 'emit0', animation: 'driver' },
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'right' },
      ],
      visor: 'standard-visor-driver',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'gunner',
      animations: [
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'left' },
      ],
      bone: 'gunner',
      visor: 'standard-visor-gunner',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'gunner3',
      animations: [
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'right' },
      ],
      visor: 'standard-visor-gunner',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'charger',
      animations: [
        { door: 'emit1', animation: 'right' },
        { door: 'emit1', animation: 'right' },
      ],
      bone: 'charger',
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor' ],
    },
  ],

  passengers: [],

};

export default options;
