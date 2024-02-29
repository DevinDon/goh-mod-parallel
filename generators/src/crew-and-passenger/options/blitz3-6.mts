import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/car/blitz3_6/crew-and-passenger.ext',

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
      name: 'leader',
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
    {
      name: 'passenger',
      forward: {
        base: {
          name: 'board',
          direction: 'forward',
        },
        begin: {
          name: 'board_body',
          direction: 'forward',
        },
        end: {
          name: 'seat_passenger',
          direction: 'forward',
        },
      },
      backward: {
        base: {
          name: 'board',
          direction: 'forward',
        },
        end: {
          name: 'emit_body',
          direction: 'forward',
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
    {
      name: 'leader',
      animation: 'leader',
      door: 'emit2',
      bone: 'commander',
    },
  ],

  passengers: [
    {
      name: 'passenger01',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat01',
    },
    {
      name: 'passenger02',
      animation: 'passenger',
      door: 'emit4',
      bone: 'seat02',
    },
    {
      name: 'passenger03',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat03',
    },
    {
      name: 'passenger04',
      animation: 'passenger',
      door: 'emit4',
      bone: 'seat04',
    },
    {
      name: 'passenger05',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat05',
    },
    {
      name: 'passenger06',
      animation: 'passenger',
      door: 'emit4',
      bone: 'seat06',
    },
    {
      name: 'passenger07',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat07',
    },
    {
      name: 'passenger08',
      animation: 'passenger',
      door: 'emit4',
      bone: 'seat08',
    },
    {
      name: 'passenger09',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat09',
    },
    {
      name: 'passenger10',
      animation: 'passenger',
      door: 'emit4',
      bone: 'seat10',
    },
    {
      name: 'passenger11',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat11',
    },
    {
      name: 'passenger12',
      animation: 'passenger',
      door: 'emit4',
      bone: 'seat12',
    },
  ],

};

export default options;
