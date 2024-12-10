import { ProjectModConfigDir } from '../../utils/constants.mjs';
import { type CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/entity/-vehicle/germany/btr/sdkfz251d_21/crew-and-passenger.ext`,

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
      name: 'standard-visor-rear-gunner',
      bone: 'mgun2',
      preset: 'standard-vehicle-vision-narrow',
    },
    {
      name: 'standard-visor-commander',
      bone: 'seat1',
      preset: 'standard-vehicle-vision-around',
    },
  ],

  animations: [
    {
      name: 'commander',
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
        begin: [ 'board_sd232_driver', 1 ],
        end: [ 'seat_251_21_gunner', 1 ],
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
  ],

  crews: [
    {
      name: 'commander',
      animations: [
        { door: 'emit1', animation: 'commander' },
      ],
      bone: 'seat1',
      visor: 'standard-visor-commander',
      turnoff: [ 'shadow', 'sensor' ],
    },
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
      visor: 'standard-visor-rear-gunner',
      turnoff: [ 'shadow', 'sensor' ],
    },
  ],

  passengers: [],

};

export default options;
