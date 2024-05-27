import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/car/blitz3_6/crew-and-passenger.ext',

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
    // 使用成员视野
  ],

  animations: [
    {
      name: 'driver',
      forward: {
        base: [ 'doorleft', 1 ],
        begin: [ 'board_opel_driver', 1 ],
        end: [ 'seat_opel_driver', 1 ],
      },
      reverse: {
        base: [ 'doorleft', 1 ],
        end: [ 'board_opel_driver', -1 ],
      },
    },
    {
      name: 'leader',
      forward: {
        base: [ 'doorright', 1 ],
        begin: [ 'board_big-midcar', 1 ],
        end: [ 'seat_opel_commander', 1 ],
      },
      reverse: {
        base: [ 'doorright', 1 ],
        end: [ 'board_big-midcar', -1 ],
      },
    },
    {
      name: 'passenger',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'board_body', 1 ],
        end: [ 'seat_passenger', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_body', 1 ],
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
      visor: 'standard-visor-none',
    },
  ],

  passengers: [
    {
      name: 'leader',
      animations: [
        { door: 'emit2', animation: 'leader' },
      ],
      bone: 'commander',
    },
    {
      name: 'passenger01',
      animations: [
        { door: 'emit3', animation: 'passenger' },
      ],
      bone: 'seat01',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger02',
      animations: [
        { door: 'emit4', animation: 'passenger' },
      ],
      bone: 'seat02',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger03',
      animations: [
        { door: 'emit3', animation: 'passenger' },
      ],
      bone: 'seat03',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger04',
      animations: [
        { door: 'emit4', animation: 'passenger' },
      ],
      bone: 'seat04',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger05',
      animations: [
        { door: 'emit3', animation: 'passenger' },
      ],
      bone: 'seat05',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger06',
      animations: [
        { door: 'emit4', animation: 'passenger' },
      ],
      bone: 'seat06',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger07',
      animations: [
        { door: 'emit3', animation: 'passenger' },
      ],
      bone: 'seat07',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger08',
      animations: [
        { door: 'emit4', animation: 'passenger' },
      ],
      bone: 'seat08',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger09',
      animations: [
        { door: 'emit3', animation: 'passenger' },
      ],
      bone: 'seat09',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger10',
      animations: [
        { door: 'emit4', animation: 'passenger' },
      ],
      bone: 'seat10',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger11',
      animations: [
        { door: 'emit3', animation: 'passenger' },
      ],
      bone: 'seat11',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger12',
      animations: [
        { door: 'emit4', animation: 'passenger' },
      ],
      bone: 'seat12',
      turnoff: [ 'shadow', 'sensor' ],
    },
  ],

};

export default options;
