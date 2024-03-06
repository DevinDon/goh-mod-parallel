import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/cannon/600mm_thor/crew-and-passenger.ext',

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
      bone: 'visor',
      preset: 'standard-vehicle-vision-around',
    },
  ],

  animations: [
    // 射击模式
    {
      name: 'a-gunner',
      forward: {
        begin: [ 'board_thor_front', 1 ],
        end: [ 'pose_thor_gunner_animation', 10 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'a-gunner2',
      forward: {
        begin: [ 'board_thor_front', 1 ],
        end: [ 'pose_thor_gunner2_animation', 10 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'a-charger',
      forward: {
        begin: [ 'board_thor_front', 1 ],
        end: [ 'pose_thor_charger_animation', 10 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'a-charger2',
      forward: {
        begin: [ 'board_thor_front', 1 ],
        end: [ 'pose_thor_charger2_animation', 10 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'a-commander',
      forward: {
        begin: [ 'board_thor_front', 1 ],
        end: [ 'pose_watch_binocular', 10 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'b-gunner',
      forward: {
        begin: [ 'board_thor_rear', 1 ],
        end: [ 'pose_thor_gunner_animation', 10 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'b-gunner2',
      forward: {
        begin: [ 'board_thor_rear', 1 ],
        end: [ 'pose_thor_gunner2_animation', 10 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'b-charger',
      forward: {
        begin: [ 'board_thor_rear', 1 ],
        end: [ 'pose_thor_charger_animation', 10 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'b-charger2',
      forward: {
        begin: [ 'board_thor_rear', 1 ],
        end: [ 'pose_thor_charger2_animation', 10 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'b-commander',
      forward: {
        begin: [ 'board_thor_rear', 1 ],
        end: [ 'pose_watch_binocular', 10 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    // 移动模式
    {
      name: 'a-driver1', // gunner
      forward: {
        end: [ 'seat_thor_driver1', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'a-driver2', // gunner2
      forward: {
        end: [ 'seat_thor_driver2', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'a-driver3', // charger
      forward: {
        end: [ 'seat_thor_driver3', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'a-driver4', // charger2
      forward: {
        end: [ 'seat_thor_driver4', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'a-driver5', // commander
      forward: {
        end: [ 'pose_watch_binocular', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'b-driver1', // gunner
      forward: {
        end: [ 'seat_thor_driver1', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'b-driver2', // gunner2
      forward: {
        end: [ 'seat_thor_driver2', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'b-driver3', // charger
      forward: {
        end: [ 'seat_thor_driver3', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'b-driver4', // charger2
      forward: {
        end: [ 'seat_thor_driver4', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
    {
      name: 'b-driver5', // commander
      forward: {
        end: [ 'pose_watch_binocular', 1 ],
      },
      reverse: {
        end: [ 'emit_tank_2_hold', 1 ],
      },
    },
  ],

  crews: [
    // 射击模式
    {
      name: 'gunner',
      animations: [
        { door: 'emit1', animation: 'a-gunner' },
        { door: 'emit2', animation: 'b-gunner' },
        { door: 'emit3', animation: 'b-gunner' },
      ],
      bone: 'gunner',
      visor: 'standard-visor-none',
    },
    {
      name: 'gunner2',
      animations: [
        { door: 'emit1', animation: 'a-gunner2' },
        { door: 'emit2', animation: 'b-gunner2' },
        { door: 'emit3', animation: 'b-gunner2' },
      ],
      bone: 'gunner2',
      visor: 'standard-visor-none',
    },
    {
      name: 'charger',
      animations: [
        { door: 'emit1', animation: 'a-charger' },
        { door: 'emit2', animation: 'b-charger' },
        { door: 'emit3', animation: 'b-charger' },
      ],
      bone: 'charger',
      visor: 'standard-visor-none',
    },
    {
      name: 'charger2',
      animations: [
        { door: 'emit1', animation: 'a-charger2' },
        { door: 'emit2', animation: 'b-charger2' },
        { door: 'emit3', animation: 'b-charger2' },
      ],
      bone: 'charger2',
      visor: 'standard-visor-none',
    },
    {
      name: 'commander',
      animations: [
        { door: 'emit1', animation: 'a-commander' },
        { door: 'emit2', animation: 'b-commander' },
        { door: 'emit3', animation: 'b-commander' },
      ],
      bone: 'commander',
      visor: 'standard-visor-commander',
      turnoff: [ 'sensor' ],
    },
    // 移动模式
    {
      name: 'driver1',
      animations: [
        { door: 'emit1', animation: 'a-driver1' },
        { door: 'emit2', animation: 'b-driver1' },
        { door: 'emit3', animation: 'b-driver1' },
      ],
      bone: 'driver1',
      visor: 'standard-visor-none',
    },
    {
      name: 'driver2',
      animations: [
        { door: 'emit1', animation: 'a-driver2' },
        { door: 'emit2', animation: 'b-driver2' },
        { door: 'emit3', animation: 'b-driver2' },
      ],
      bone: 'driver2',
      visor: 'standard-visor-none',
    },
    {
      name: 'driver3',
      animations: [
        { door: 'emit1', animation: 'a-driver3' },
        { door: 'emit2', animation: 'b-driver3' },
        { door: 'emit3', animation: 'b-driver3' },
      ],
      bone: 'driver3',
      visor: 'standard-visor-none',
    },
    {
      name: 'driver4',
      animations: [
        { door: 'emit1', animation: 'a-driver4' },
        { door: 'emit2', animation: 'b-driver4' },
        { door: 'emit3', animation: 'b-driver4' },
      ],
      bone: 'driver4',
      visor: 'standard-visor-none',
    },
    {
      name: 'driver5',
      animations: [
        { door: 'emit1', animation: 'a-driver5' },
        { door: 'emit2', animation: 'b-driver5' },
        { door: 'emit3', animation: 'b-driver5' },
      ],
      bone: 'driver5',
      visor: 'standard-visor-none',
    },
  ],

  passengers: [],

  extra: [
    `{Boarder
  {link "driver1" "gunner"}
  {link "driver2" "gunner2"}
  {link "driver3" "charger"}
  {link "driver4" "charger2"}
  {link "driver5" "commander"}
}`,
  ],

};

export default options;
