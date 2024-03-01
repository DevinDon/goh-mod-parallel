import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/usa-90mm-m3.weapon',

  name: 'usa-90mm-m3',
  description: '美国 90mm M3 坦克炮',

  from: 'pattern gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/big_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'usa-90x600',
  amout: 1,
  calibre: 90,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 8.9,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    ap: {
      minRange: 0,
      aimRange: 325,
      maxRange: 325,
      speed: 823,
      gravity: 5,
      projectile: {
        nearest: 188,
        farthest: 96,
      },
      damage: 220,
      spreading: {
        radiusTable: {
          nearest: 0.37,
          farthest: 2.73,
          factor: 3.5,
        },
        burstRecoveryTime: 0.9,
        burstAccuracy: 100,
        spreadPower: 1.10,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-90mm-ap',
    },
    apbc: {
      minRange: 0,
      aimRange: 325,
      maxRange: 325,
      speed: 853,
      gravity: 5,
      projectile: {
        nearest: 164,
        farthest: 140,
      },
      damage: 220,
      spreading: {
        radiusTable: {
          nearest: 0.33,
          farthest: 2.43,
          factor: 3.5,
        },
        burstRecoveryTime: 0.9,
        burstAccuracy: 100,
        spreadPower: 1.12,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-90mm-apbc',
    },
    apcbche: {
      minRange: 0,
      aimRange: 325,
      maxRange: 325,
      speed: 853,
      gravity: 5,
      projectile: {
        nearest: 169,
        farthest: 127,
      },
      damage: 290,
      spreading: {
        radiusTable: {
          nearest: 0.39,
          farthest: 2.59,
          factor: 3.5,
        },
        burstRecoveryTime: 0.9,
        burstAccuracy: 100,
        spreadPower: 1.15,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-90mm-apcbc',
    },
    hvap: {
      minRange: 0,
      aimRange: 325,
      maxRange: 325,
      speed: 1018,
      gravity: 5,
      projectile: {
        nearest: 306,
        farthest: 193,
      },
      damage: 185,
      spreading: {
        radiusTable: {
          nearest: 0.375,
          farthest: 2.88,
          factor: 3.5,
        },
        burstRecoveryTime: 0.9,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-90mm-hvap',
    },
    he: {
      minRange: 0,
      aimRange: 325,
      maxRange: 325,
      speed: 823,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 1.32,
          farthest: 4.67,
          factor: 4.0,
        },
        burstRecoveryTime: 0.9,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
  },

};

export default options;
