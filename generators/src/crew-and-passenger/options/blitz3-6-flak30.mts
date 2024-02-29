import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/car/blitz3_6_flak30/crew-and-passenger.ext',

  visors: [
    {
      name: 'driver',
      bone: 'driver',
      preset: 'standard-vision-around',
    },
    {
      name: 'gunner',
      bone: 'gunner',
      preset: 'standard-vision-wide',
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
          name: 'emit_body',
          direction: 'forward',
        },
      },
    },
    {
      name: 'gunner',
      forward: {
        base: {
          name: 'board',
          direction: 'forward',
        },
        begin: {
          name: 'board_SdKfz251-1',
          direction: 'forward',
        },
        end: {
          name: 'pose_flak30_gunner',
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
    {
      name: 'charger',
      forward: {
        base: {
          name: 'board',
          direction: 'forward',
        },
        begin: {
          name: 'board_SdKfz251-1',
          direction: 'forward',
        },
        end: {
          name: 'pose_flak30_loader',
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
      name: 'gunner',
      animation: 'gunner',
      door: 'emit3',
      bone: 'gunner',
      visor: 'gunner',
    },
    {
      name: 'charger',
      animation: 'charger',
      door: 'emit4',
      bone: 'charger',
      visor: 'charger',
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
