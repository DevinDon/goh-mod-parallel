import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/tank_medium/stuh42/crew-and-passenger.ext',

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
      bone: 'visor1',
      preset: 'standard-vision-narrow',
    },
    {
      name: 'standard-visor-gunner',
      bone: 'foresight1',
      preset: 'standard-vision-narrow',
    },
    {
      name: 'standard-visor-commander',
      bone: 'visor',
      preset: 'standard-vision-around',
    },
  ],

  animations: [
    {
      name: 'left',
      forward: {
        begin: [ 'board_tank_left', 1 ],
        end: [ 'pose_mgun_pz6', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_1', 1 ],
      },
    },
    {
      name: 'right',
      forward: {
        begin: [ 'board_tank_left', 1 ],
        end: [ 'pose_mgun_pz6', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'armor1',
      forward: {
        begin: [ 'board_MiddleArmor', 1 ],
        end: [ 'pose_seat_armor_2', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_1', 1 ],
      },
    },
    {
      name: 'armor2',
      forward: {
        begin: [ 'board_MiddleArmor', 1 ],
        end: [ 'pose_seat_armor_1', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_1', 1 ],
      },
    },
    {
      name: 'armor3',
      forward: {
        begin: [ 'board_MiddleArmor', 1 ],
        end: [ 'pose_seat_armor_1', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_1', 1 ],
      },
    },
  ],

  crews: [
    {
      name: 'driver',
      animations: [
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'right' },
      ],
      visor: 'standard-visor-driver',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
    {
      name: 'gunner',
      animations: [
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'right' },
      ],
      visor: 'standard-visor-gunner',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
    {
      name: 'charger',
      animations: [
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'right' },
      ],
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
    {
      name: 'commander',
      animations: [
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'right' },
      ],
      bone: 'gunner2',
      visor: 'standard-visor-commander',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
      extra: [ '{sealable}' ],
    },
  ],

  passengers: [
    {
      name: 'passenger01',
      animations: [
        { door: 'emit3', animation: 'armor1' },
      ],
      bone: 'seat01',
    },
    {
      name: 'passenger02',
      animations: [
        { door: 'emit4', animation: 'armor1' },
      ],
      bone: 'seat02',
    },
    {
      name: 'passenger03',
      animations: [
        { door: 'emit5', animation: 'armor3' },
      ],
      bone: 'seat03',
    },
    {
      name: 'passenger04',
      animations: [
        { door: 'emit6', animation: 'armor2' },
      ],
      bone: 'seat04',
    },
  ],

};

export default options;
