import { ProjectModConfigDir } from '../../utils/constants.mjs';
import { type CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/entity/-vehicle/germany/car/kubelwagen_mg/crew-and-passenger.ext`,

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
        begin: [ 'board_Kubel_driver', 1 ],
        end: [ 'seat_kubel_driver', 1 ],
      },
      reverse: {
        base: [ 'doorleft1', -1 ],
        end: [ 'board_Kubel_driver', -1 ],
      },
    },
    {
      name: 'leader',
      forward: {
        base: [ 'doorright1', 1 ],
        begin: [ 'board_Kubel_commander', 1 ],
        end: [ 'seat_kubel_commander', 1 ],
      },
      reverse: {
        base: [ 'doorright1', -1 ],
        end: [ 'board_Kubel_commander', -1 ],
      },
    },
    {
      name: 'left',
      forward: {
        base: [ 'doorleft2', 1 ],
        begin: [ 'board_Kubel_leftpassenger', 1 ],
        end: [ 'seat_kubel_gunner2', 1 ],
      },
      reverse: {
        base: [ 'doorleft2', -1 ],
        end: [ 'board_Kubel_leftpassenger', -1 ],
      },
    },
    {
      name: 'right',
      forward: {
        base: [ 'doorright2', 1 ],
        begin: [ 'board_Kubel_rightpassenger', 1 ],
        end: [ 'seat_kubel_gunner2', 1 ],
      },
      reverse: {
        base: [ 'doorright2', -1 ],
        end: [ 'board_Kubel_rightpassenger', -1 ],
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
        { door: 'emit3', animation: 'left' },
        { door: 'emit4', animation: 'right' },
      ],
      bone: 'gunner',
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
  ],

};

export default options;
