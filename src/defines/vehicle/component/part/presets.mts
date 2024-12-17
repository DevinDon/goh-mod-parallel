import { type PresetLevel } from '../shared.mjs';
import { type SetGunOptions } from './gun.mjs';
import { type SetTrackOptions } from './track.mjs';

export type PartOptions = {
  turret: number;
  mantlet: number;
  gun: SetGunOptions;
  body: number;
  engine: number;
  track: SetTrackOptions;
  armor: number;
};

export const PartPresets: Record<PresetLevel, PartOptions> = {
  Level01: {
    turret: 5,
    mantlet: 5,
    gun: {
      thickness: 5,
      repair: 5,
    },
    body: 5,
    engine: 5,
    track: {
      thickness: 5,
      repair: 5,
    },
    armor: 5,
  },
  Level02: {
    turret: 10,
    mantlet: 10,
    gun: {
      thickness: 10,
      repair: 10,
    },
    body: 10,
    engine: 10,
    track: {
      thickness: 10,
      repair: 10,
    },
    armor: 10,
  },
  Level03: {
    turret: 15,
    mantlet: 15,
    gun: {
      thickness: 15,
      repair: 15,
    },
    body: 15,
    engine: 15,
    track: {
      thickness: 15,
      repair: 15,
    },
    armor: 15,
  },
  Level04: {
    turret: 20,
    mantlet: 20,
    gun: {
      thickness: 20,
      repair: 20,
    },
    body: 20,
    engine: 20,
    track: {
      thickness: 20,
      repair: 20,
    },
    armor: 20,
  },
  Level05: {
    turret: 25,
    mantlet: 25,
    gun: {
      thickness: 25,
      repair: 25,
    },
    body: 25,
    engine: 25,
    track: {
      thickness: 25,
      repair: 25,
    },
    armor: 25,
  },
  Level06: {
    turret: 30,
    mantlet: 30,
    gun: {
      thickness: 30,
      repair: 30,
    },
    body: 30,
    engine: 30,
    track: {
      thickness: 30,
      repair: 30,
    },
    armor: 30,
  },
  Level07: {
    turret: 35,
    mantlet: 35,
    gun: {
      thickness: 35,
      repair: 35,
    },
    body: 35,
    engine: 35,
    track: {
      thickness: 35,
      repair: 35,
    },
    armor: 35,
  },
  Level08: {
    turret: 40,
    mantlet: 40,
    gun: {
      thickness: 40,
      repair: 40,
    },
    body: 40,
    engine: 40,
    track: {
      thickness: 40,
      repair: 40,
    },
    armor: 40,
  },
  Level09: {
    turret: 45,
    mantlet: 45,
    gun: {
      thickness: 45,
      repair: 45,
    },
    body: 45,
    engine: 45,
    track: {
      thickness: 45,
      repair: 45,
    },
    armor: 45,
  },
  Level10: {
    turret: 50,
    mantlet: 50,
    gun: {
      thickness: 50,
      repair: 50,
    },
    body: 50,
    engine: 50,
    track: {
      thickness: 50,
      repair: 50,
    },
    armor: 50,
  },
};
