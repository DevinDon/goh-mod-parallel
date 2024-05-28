import { ProjectModConfigDir } from '../../utils/constants.mjs';
import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/entity/-vehicle/germany/btr/sdkfz251d_1/crew-and-passenger.ext`,

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
      name: 'standard-visor-commander',
      bone: 'seat9',
      preset: 'standard-vehicle-vision-around',
    },
    {
      name: 'standard-visor-driver',
      bone: 'driver',
      preset: 'standard-vehicle-vision-narrow',
    },
    {
      name: 'standard-visor-gunner',
      bone: 'gunner2',
      preset: 'standard-vehicle-vision-narrow',
    },
    {
      name: 'standard-visor-rear-gunner',
      bone: 'gunner4',
      preset: 'standard-vehicle-vision-medium',
    },
  ],

  animations: [
    // 成员动画
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
        end: [ 'pose_mgun_251', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    // 乘员动画
    {
      name: 'passenger01',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_pass_l_01_board', 1 ],
        end: [ 'halftrack_pass_l_01_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger02',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_pass_r_01_board', 1 ],
        end: [ 'halftrack_pass_r_01_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger03',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_pass_l_02_board', 1 ],
        end: [ 'halftrack_pass_l_02_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger04',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_pass_r_02_board', 1 ],
        end: [ 'halftrack_pass_r_02_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger05',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_pass_l_03_board', 1 ],
        end: [ 'halftrack_pass_l_03_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger06',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_pass_r_03_board', 1 ],
        end: [ 'halftrack_pass_r_03_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger07',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_pass_l_04_board', 1 ],
        end: [ 'halftrack_pass_l_04_board_seat', 1 ],
      },
      reverse: {
        base: [ 'board', 1 ],
        end: [ 'emit_sd222_driver', 1 ],
      },
    },
    {
      name: 'passenger08',
      forward: {
        base: [ 'board', 1 ],
        begin: [ 'halftrack_pass_r_04_board', 1 ],
        end: [ 'halftrack_pass_r_04_board_seat', 1 ],
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
      bone: 'seat9',
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
      name: 'gunner2',
      animations: [
        { door: 'emit2', animation: 'gunner' },
      ],
      bone: 'gunner2',
      visor: 'standard-visor-gunner',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'gunner4',
      animations: [
        { door: 'emit2', animation: 'gunner' },
      ],
      bone: 'gunner4',
      visor: 'standard-visor-rear-gunner',
      turnoff: [ 'shadow', 'sensor' ],
    },
  ],

  passengers: [
    {
      name: 'passenger01',
      animations: [
        { door: 'emit1', animation: 'passenger01' },
      ],
      bone: 'seat1',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger02',
      animations: [
        { door: 'emit2', animation: 'passenger02' },
      ],
      bone: 'seat2',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger03',
      animations: [
        { door: 'emit1', animation: 'passenger03' },
      ],
      bone: 'seat3',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger04',
      animations: [
        { door: 'emit2', animation: 'passenger04' },
      ],
      bone: 'seat4',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger05',
      animations: [
        { door: 'emit1', animation: 'passenger05' },
      ],
      bone: 'seat5',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger06',
      animations: [
        { door: 'emit2', animation: 'passenger06' },
      ],
      bone: 'seat6',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger07',
      animations: [
        { door: 'emit1', animation: 'passenger07' },
      ],
      bone: 'seat7',
      turnoff: [ 'shadow', 'sensor' ],
    },
    {
      name: 'passenger08',
      animations: [
        { door: 'emit2', animation: 'passenger08' },
      ],
      bone: 'seat8',
      turnoff: [ 'shadow', 'sensor' ],
    },
  ],

};

export default options;
