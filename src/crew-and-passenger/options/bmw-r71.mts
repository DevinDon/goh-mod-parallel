import { ProjectModConfigDir } from '../../utils/constants.mjs';
import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/entity/-vehicle/germany/car/bmw_r71/crew-and-passenger.ext`,

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
        base: [ 'doorleft1', 1 ],
        begin: [ 'board_moto_driver', 1 ],
        end: [ 'pose_moto_driver', 1 ],
      },
      reverse: {
        base: [ 'doorleft1', -1 ],
        end: [ 'board_moto_driver', -1 ],
      },
    },
    {
      name: 'gunner',
      forward: {
        begin: [ 'board_moto_sidecar', 1 ],
        end: [ 'pose_moto_sidecar', 1 ],
      },
      reverse: {
        end: [ 'board_moto_sidecar', -1 ],
      },
    },
    {
      name: 'passenger',
      forward: {
        begin: [ 'board_moto_passenger', 1 ],
        end: [ 'pose_moto_passenger', 1 ],
      },
      reverse: {
        end: [ 'board_moto_passenger', -1 ],
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
        { door: 'emit2', animation: 'gunner' },
      ],
      bone: 'gunner',
      visor: 'standard-visor-none',
    },
  ],

  passengers: [
    {
      name: 'passenger',
      animations: [
        { door: 'emit3', animation: 'passenger' },
      ],
      bone: 'seat1',
    },
  ],

};

export default options;
