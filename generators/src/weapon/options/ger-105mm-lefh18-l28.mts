import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/ger-105mm-lefh18-l28.weapon',

  name: 'ger-105mm-lefh18-l28',
  description: '德国 10.5cm leFH 18 L/28 榴弹炮',

  from: 'pattern gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_75_105',
  reloadSound: 'tank/reload_big',
  cursor: 'ironsights/tank2',

  ammo: 'ger-105l28',
  amout: 1,
  calibre: 105,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.75,

  rechargeTime: 12.15,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    aphe: {
      minRange: 0,
      aimRange: 750,
      maxRange: 750,
      speed: 390,
      gravity: 5,
      projectile: {
        nearest: 73,
        farthest: 53,
      },
      damage: 410,
      spreading: {
        radiusTable: {
          nearest: 1.751,
          farthest: 5.155,
          factor: 3.5,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-105mm-ap',
    },
    heat: {
      minRange: 0,
      aimRange: 750,
      maxRange: 750,
      speed: 496,
      gravity: 5,
      projectile: {
        nearest: 104,
        farthest: 104,
      },
      damage: 355,
      spreading: {
        radiusTable: {
          nearest: 1.975,
          farthest: 6.125,
          factor: 4.0,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    he: {
      minRange: 0,
      aimRange: 750,
      maxRange: 750,
      speed: 196,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 2.775,
          farthest: 7.905,
          factor: 4.0,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  },

};

export default options;
