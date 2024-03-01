import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/usa-76mm-m1a2.weapon',

  name: 'usa-76mm-m1a2',
  description: '美国 76mm M1A2 坦克炮',

  from: 'pattern gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/medium_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'usa-76x539',
  amout: 1,
  calibre: 76,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 7,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    apcbche: {
      minRange: 0,
      aimRange: 300,
      maxRange: 300,
      speed: 792,
      gravity: 5,
      projectile: {
        nearest: 125,
        farthest: 90,
      },
      damage: 165,
      spreading: {
        radiusTable: {
          nearest: 0.45,
          farthest: 3.43,
          factor: 3.5,
        },
        burstRecoveryTime: 0.76,
        burstAccuracy: 100,
        spreadPower: 1.15,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-76mm-apcbc',
    },
    hvap: {
      minRange: 0,
      aimRange: 300,
      maxRange: 300,
      speed: 1036,
      gravity: 5,
      projectile: {
        nearest: 239,
        farthest: 124,
      },
      damage: 130,
      spreading: {
        radiusTable: {
          nearest: 0.375,
          farthest: 2.88,
          factor: 3.5,
        },
        burstRecoveryTime: 0.76,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-76mm-hvap',
    },
    he: {
      minRange: 0,
      aimRange: 300,
      maxRange: 300,
      speed: 820,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 1.5,
          farthest: 4.67,
          factor: 4.0,
        },
        burstRecoveryTime: 0.76,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
    wp: {
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 270,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 1.5,
          farthest: 4.67,
          factor: 4.0,
        },
        burstRecoveryTime: 0.76,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
  },

};

export default options;
