import { ProjectModConfigDir } from '../../utils/constants.mjs';
import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: `${ProjectModConfigDir}/40-inf-spg/resource/entity/-vehicle/inf/spg/pzh2000/crew-and-passenger.ext`,

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
        begin: [ 'board_t34_driver', 1 ],
        end: [ 'seat_gunner_stand', 1 ],
      },
      reverse: {
        base: [ 'close_driver', 1 ],
        end: [ 'emit_t34_hold', 1 ],
      },
    },
    {
      name: 'left',
      forward: {
        begin: [ 'board_Is-2', 1 ],
        end: [ 'seat_commander_hatch', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_1_hold', 1 ],
      },
    },
    {
      name: 'right',
      forward: {
        begin: [ 'board_Is-2', 1 ],
        end: [ 'seat_commander_hatch', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_1_hold', 1 ],
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
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
    {
      name: 'driver',
      animations: [
        { door: 'emit1', animation: 'driver' },
        { door: 'emit2', animation: 'driver' },
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
  ],

  passengers: [],

};

export default options;
