import type { CrewAndPassengerOptions } from '../options.mjs';

const options: CrewAndPassengerOptions = {

  destination: 'resource/entity/-vehicle/germany/car/bmw_r71/crew-and-passenger.ext',

  visors: [
    {
      name: 'driver',
      bone: 'driver',
      preset: 'standard-vision-around',
    },
    {
      name: 'gunner',
      bone: 'gunner',
      preset: 'standard-vision-medium',
    },
  ],

  animations: [
    {
      name: 'driver',
      forward: {
        base: {
          name: 'doorleft1',
          direction: 'forward',
        },
        begin: {
          name: 'board_moto_driver',
          direction: 'forward',
        },
        end: {
          name: 'pose_moto_driver',
          direction: 'forward',
        },
      },
      backward: {
        base: {
          name: 'doorleft1',
          direction: 'backward',
        },
        end: {
          name: 'board_moto_driver',
          direction: 'backward',
        },
      },
    },
    {
      name: 'gunner',
      forward: {
        begin: {
          name: 'board_moto_sidecar',
          direction: 'forward',
        },
        end: {
          name: 'pose_moto_sidecar',
          direction: 'forward',
        },
      },
      backward: {
        end: {
          name: 'board_moto_sidecar',
          direction: 'backward',
        },
      },
    },
    {
      name: 'passenger',
      forward: {
        begin: {
          name: 'board_moto_passenger',
          direction: 'forward',
        },
        end: {
          name: 'pose_moto_passenger',
          direction: 'forward',
        },
      },
      backward: {
        end: {
          name: 'board_moto_passenger',
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
    {
      name: 'gunner',
      animation: 'gunner',
      door: 'emit2',
      bone: 'gunner',
      visor: 'gunner',
    },
  ],

  passengers: [
    {
      name: 'passenger',
      animation: 'passenger',
      door: 'emit3',
      bone: 'seat1',
    },
  ],

};

export default options;
