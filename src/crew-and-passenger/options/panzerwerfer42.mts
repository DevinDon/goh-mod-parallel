import { ProjectModConfigDir } from '../../utils/constants.mjs';
import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/entity/-vehicle/germany/btr/panzerwerfer42/crew-and-passenger.ext`,

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
    {
      name: 'standard-visor-driver',
      bone: 'visor1',
      preset: 'standard-vehicle-vision-narrow',
    },
    {
      name: 'standard-visor-gunner',
      bone: 'foresight1',
      preset: 'standard-vehicle-vision-narrow',
    },
    {
      name: 'standard-visor-commander',
      bone: 'visor',
      preset: 'standard-vehicle-vision-around',
    },
  ],

  animations: [
    {
      name: 'left',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'board_body', 1 ],
        end: [ 'pose_jagdtiger_aa', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_tank_1_hold', 1 ],
      },
    },
    {
      name: 'right',
      forward: {
        base: [ 'board', 2 ],
        begin: [ 'board_body', 2 ],
        end: [ 'pose_jagdtiger_aa', 2 ],
      },
      reverse: {
        base: [ 'board', 2 ],
        end: [ 'emit_tank_1_hold', 2 ],
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
      bone: 'gunner2',
      visor: 'standard-visor-commander',
      turnoff: [ 'shadow', 'sensor' ],
      extra: [ '{sealable}' ],
    },
    {
      name: 'driver',
      animations: [
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'right' },
      ],
      visor: 'standard-visor-driver',
    },
    {
      name: 'gunner',
      animations: [
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'right' },
      ],
      visor: 'standard-visor-gunner',
    },
    {
      name: 'charger',
      animations: [
        { door: 'emit1', animation: 'left' },
        { door: 'emit2', animation: 'right' },
      ],
      visor: 'standard-visor-none',
    },
  ],

  passengers: [],

};

export default options;
