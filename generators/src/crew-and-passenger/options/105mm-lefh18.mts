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
      name: 'standard-visor-commander',
      bone: 'visor',
      preset: 'standard-vision-around',
    },
  ],

  animations: [
    {
      name: 'driver01',
      forward: {
        end: [ 'cannon_pak40_pusher_left', 10 ],
      },
    },
    {
      name: 'driver02',
      forward: {
        end: [ 'cannon_pak40_pusher_right', 10 ],
      },
    },
    {
      name: 'driver03',
      forward: {
        end: [ 'mgun_browning_driver_l', 10 ],
      },
    },
    {
      name: 'driver04',
      forward: {
        end: [ 'mgun_browning_driver_r', 10 ],
      },
    },
    {
      name: 'seat01',
      forward: {
        end: [ 'pose_seat_cannon_left', 10 ],
      },
    },
    {
      name: 'seat02',
      forward: {
        end: [ 'pose_seat_cannon_right', 10 ],
      },
    },
    {
      name: 'seat03',
      forward: {
        end: [ 'pose_seat_cannon_right', 10 ],
      },
    },
    {
      name: 'seat04',
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
      name: 'charger01',
      forward: {
        end: [ 'pose_pdr25_charger', 10 ],
      },
    },
    {
      name: 'charger02',
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
      name: 'commander',
      animations: [
        { door: 'emit4', animation: 'commander' },
      ],
      bone: 'commander',
      visor: 'standard-visor-commander',
      extra: [ '{openForCrush}' ],
    },
    {
      name: 'gunner',
      animations: [
        { door: 'emit1', animation: 'gunner' },
      ],
      bone: 'gunner',
      visor: 'standard-visor-none',
      extra: [ '{openForCrush}' ],
    },
    {
      name: 'charger01',
      animations: [
        { door: 'emit2', animation: 'charger01' },
      ],
      bone: 'charger',
      visor: 'standard-visor-none',
      extra: [ '{openForCrush}' ],
    },
    {
      name: 'charger02',
      animations: [
        { door: 'emit3', animation: 'charger02' },
      ],
      bone: 'charger2',
      visor: 'standard-visor-none',
      extra: [ '{openForCrush}' ],
    },
    // 移动模式
    {
      name: 'driver01',
      animations: [
        { door: 'emit1', animation: 'driver01' },
      ],
      bone: 'driver1',
      visor: 'standard-visor-none',
    },
    {
      name: 'driver02',
      animations: [
        { door: 'emit1', animation: 'driver02' },
      ],
      bone: 'driver2',
      visor: 'standard-visor-none',
    },
    {
      name: 'driver03',
      animations: [
        { door: 'emit1', animation: 'driver03' },
      ],
      bone: 'driver3',
      visor: 'standard-visor-none',
    },
    {
      name: 'driver04',
      animations: [
        { door: 'emit1', animation: 'driver04' },
      ],
      bone: 'driver4',
      visor: 'standard-visor-none',
    },
    // 牵引模式
    {
      name: 'seat01',
      animations: [
        { door: 'emit1', animation: 'seat01' },
      ],
      bone: 'seat1',
      visor: 'standard-visor-none',
    },
    {
      name: 'seat02',
      animations: [
        { door: 'emit1', animation: 'seat02' },
      ],
      bone: 'seat2',
      visor: 'standard-visor-none',
    },
    {
      name: 'seat03',
      animations: [
        { door: 'emit1', animation: 'seat03' },
      ],
      bone: 'seat3',
      visor: 'standard-visor-none',
    },
    {
      name: 'seat04',
      animations: [
        { door: 'emit1', animation: 'seat04' },
      ],
      bone: 'seat4',
      visor: 'standard-visor-none',
    },
  ],

  passengers: [],

  extra: [
    `{Boarder
  {link "seat01" "driver01"}
  {link "seat02" "driver02"}
  {link "seat03" "driver03"}
  {link "seat04" "driver04"}

  {link "driver01" "gunner"}
  {link "driver02" "charger01"}
  {link "driver03" "charger02"}
  {link "driver04" "commander"}
}`,
  ],

};

export default options;
