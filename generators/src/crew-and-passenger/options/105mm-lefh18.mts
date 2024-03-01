import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/cannon/105mm_lefh18/crew-and-passenger.ext',

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
      name: 'driver1',
      forward: {
        end: [ 'cannon_pak40_pusher_left', 10 ],
      },
    },
    {
      name: 'driver2',
      forward: {
        end: [ 'cannon_pak40_pusher_right', 10 ],
      },
    },
    {
      name: 'driver3',
      forward: {
        end: [ 'mgun_browning_driver_l', 10 ],
      },
    },
    {
      name: 'driver4',
      forward: {
        end: [ 'mgun_browning_driver_r', 10 ],
      },
    },
    {
      name: 'seat1',
      forward: {
        end: [ 'pose_seat_cannon_left', 10 ],
      },
    },
    {
      name: 'seat2',
      forward: {
        end: [ 'pose_seat_cannon_right', 10 ],
      },
    },
    {
      name: 'seat3',
      forward: {
        end: [ 'pose_seat_cannon_right', 10 ],
      },
    },
    {
      name: 'seat4',
      forward: {
        end: [ 'pose_seat_cannon_left', 10 ],
      },
    },
    {
      name: 'gunner',
      forward: {
        end: [ 'pose_m5_gunlayer', 10 ],
      },
    },
    {
      name: 'charger',
      forward: {
        end: [ 'pose_pdr25_charger', 10 ],
      },
    },
    {
      name: 'charger2',
      forward: {
        end: [ 'pose_squat_empty', 10 ],
      },
    },
    {
      name: 'commander',
      forward: {
        end: [ 'pose_squat_watch_binocular', 10 ],
      },
    },
  ],

  crews: [
    // 射击模式
    {
      name: 'gunner',
      animations: [
        { door: 'emit1', animation: 'gunner' },
      ],
      bone: 'gunner',
      visor: 'standard-visor-gunner',
      turnoff: [ 'shadow', 'sensor' ],
      extra: [ '{openForCrush}' ],
    },
    {
      name: 'commander',
      animations: [
        { door: 'emit4', animation: 'commander' },
      ],
      bone: 'commander',
      visor: 'standard-visor-commander',
      turnoff: [ 'shadow', 'sensor' ],
      extra: [ '{openForCrush}' ],
    },
    {
      name: 'charger',
      animations: [
        { door: 'emit2', animation: 'charger' },
      ],
      bone: 'charger',
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor' ],
      extra: [ '{openForCrush}' ],
    },
    {
      name: 'charger2',
      animations: [
        { door: 'emit3', animation: 'charger2' },
      ],
      bone: 'charger2',
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor' ],
      extra: [ '{openForCrush}' ],
    },
    // 移动模式
    {
      name: 'driver1',
      animations: [
        { door: 'emit1', animation: 'driver1' },
      ],
      bone: 'driver1',
      visor: 'standard-visor-commander',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
    {
      name: 'driver2',
      animations: [
        { door: 'emit1', animation: 'driver2' },
      ],
      bone: 'driver2',
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
    {
      name: 'driver3',
      animations: [
        { door: 'emit1', animation: 'driver3' },
      ],
      bone: 'driver3',
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
    {
      name: 'driver4',
      animations: [
        { door: 'emit1', animation: 'driver4' },
      ],
      bone: 'driver4',
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
    // 牵引模式
    {
      name: 'seat1',
      animations: [
        { door: 'emit1', animation: 'seat1' },
      ],
      bone: 'seat1',
      visor: 'standard-visor-commander',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
    {
      name: 'seat2',
      animations: [
        { door: 'emit1', animation: 'seat2' },
      ],
      bone: 'seat2',
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
    {
      name: 'seat3',
      animations: [
        { door: 'emit1', animation: 'seat3' },
      ],
      bone: 'seat3',
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
    {
      name: 'seat4',
      animations: [
        { door: 'emit1', animation: 'seat4' },
      ],
      bone: 'seat4',
      visor: 'standard-visor-none',
      turnoff: [ 'shadow', 'sensor', 'targetable' ],
    },
  ],

  passengers: [],

  extra: [
    `{Boarder
  {link "seat1" "driver1"}
  {link "seat2" "driver2"}
  {link "seat3" "driver3"}
  {link "seat4" "driver4"}

  {link "driver1" "gunner"}
  {link "driver2" "charger"}
  {link "driver3" "charger2"}
  {link "driver4" "commander"}
}`,
  ],

};

export default options;
