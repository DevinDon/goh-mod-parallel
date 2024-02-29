import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/car/blitz3_6_art_ammo/crew-and-passenger.ext',

  visors: [
    {
      name: 'driver',
      bone: 'driver',
      preset: 'standard-vision-around',
    },
  ],

  animations: [
    {
      name: 'driver',
      forward: {
        base: {
          name: 'doorleft',
          direction: 'forward',
        },
        begin: {
          name: 'board_opel_driver',
          direction: 'forward',
        },
        end: {
          name: 'seat_opel_driver',
          direction: 'forward',
        },
      },
      backward: {
        base: {
          name: 'doorleft',
          direction: 'forward',
        },
        end: {
          name: 'board_opel_driver',
          direction: 'backward',
        },
      },
    },
    {
      name: 'passenger',
      forward: {
        base: {
          name: 'doorright',
          direction: 'forward',
        },
        begin: {
          name: 'board_big-midcar',
          direction: 'forward',
        },
        end: {
          name: 'seat_opel_commander',
          direction: 'forward',
        },
      },
      backward: {
        base: {
          name: 'doorright',
          direction: 'forward',
        },
        end: {
          name: 'board_big-midcar',
          direction: 'backward',
        },
      },
    },
  ],

  crews: [
    {
      name: 'driver',
      animation: 'driver',
      door: 'emit1',
      bone: 'driver',
      visor: 'driver',
    },
  ],

  passengers: [
    {
      name: 'passenger01',
      animation: 'passenger',
      door: 'emit2',
      bone: 'commander',
    },
    {
      name: 'passenger02',
      animation: 'passenger',
      door: 'emit2',
      bone: 'commander',
    },
  ],

};

export default options;
