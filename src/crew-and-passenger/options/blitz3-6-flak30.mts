import { ProjectModConfigDir } from '../../utils/constants.mjs';
import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/entity/-vehicle/germany/car/blitz3_6_flak30/crew-and-passenger.ext`,

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
        end: [ 'emit_body', 1 ],
      },
    },
    {
      name: 'gunner',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'board_SdKfz251-1', 1 ],
        end: [ 'pose_flak30_gunner', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_body', 1 ],
      },
    },
    {
      name: 'charger',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'board_SdKfz251-1', 1 ],
        end: [ 'pose_flak30_loader', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_body', 1 ],
      },
    },
    {
      name: 'passenger',
      forward: {
        base: [ 'doorright', 1 ],
        begin: [ 'board_big-midcar', 1 ],
        end: [ 'seat_opel_commander', 1 ],
      },
      reverse: {
        base: [ 'doorright', 1 ],
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
    {
      name: 'gunner',
      animations: [
        { door: 'emit3', animation: 'gunner' },
      ],
      bone: 'gunner',
      visor: 'standard-visor-none',
    },
    {
      name: 'charger',
      animations: [
        { door: 'emit4', animation: 'charger' },
      ],
      bone: 'charger',
      visor: 'standard-visor-none',
    },
  ],

  passengers: [
    {
      name: 'passenger',
      animations: [
        { door: 'emit2', animation: 'passenger' },
      ],
      bone: 'commander',
    },
  ],

};

export default options;
