import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/tank_medium/e-50/crew-and-passenger.ext',

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
      name: 'driver',
      forward: {
        base: [ 'open_driver', 1 ],
        begin: [ 'board_pz4_driver', 1 ],
        end: [ 'seat_gunner_stand', 1 ],
      },
      reverse: {
        base: [ 'open_driver', -1 ],
        end: [ 'board_pz4_driver', 1 ],
      },
    },
    {
      name: 'left',
      forward: {
        begin: [ 'board_Kv', 1 ],
        end: [ 'pose_mgun_pz6', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'right',
      forward: {
        begin: [ 'board_tank_right', 1 ],
        end: [ 'pose_mgun_pz6', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'armor',
      forward: {
        begin: [ 'board_HighArmor', 1 ],
        end: [ 'pose_seat_armor_1', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_1', 1 ],
      },
    },
  ],

  crews: [
    {
      name: 'commander',
      animations: [
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'right' },
      ],
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
        { door: 'emit2', animation: 'right' },
      ],
      visor: 'standard-visor-gunner',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'charger',
      animations: [
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'right' },
      ],
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'charger2',
      animations: [
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'right' },
      ],
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor' ],
    },
  ],

  passengers: [],

};

export default options;
