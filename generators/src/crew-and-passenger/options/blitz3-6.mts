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
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'leader',
      animation: 'leader',
      door: 'emit2',
      bone: 'commander',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
  ],

  passengers: [
    {
      name: 'passenger01',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat01',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'passenger02',
      animation: 'passenger',
      door: 'emit4',
      bone: 'seat02',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'passenger03',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat03',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'passenger04',
      animation: 'passenger',
      door: 'emit4',
      bone: 'seat04',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'passenger05',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat05',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'passenger06',
      animation: 'passenger',
      door: 'emit4',
      bone: 'seat06',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'passenger07',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat07',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'passenger08',
      animation: 'passenger',
      door: 'emit4',
      bone: 'seat08',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'passenger09',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat09',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'passenger10',
      animation: 'passenger',
      door: 'emit4',
      bone: 'seat10',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'passenger11',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat11',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
    {
      name: 'passenger12',
      animation: 'passenger',
      door: 'emit4',
      bone: 'seat12',
      turnoff: [ 'shadow', 'sensor', 'targetable 1' ],
    },
  ],

};

export default options;
