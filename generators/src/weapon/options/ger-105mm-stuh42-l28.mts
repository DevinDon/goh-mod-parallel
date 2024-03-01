import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/ger-105mm-stuh42-l28.weapon',

  name: 'ger-105mm-stuh42-l28',
  description: '德国 10.5cm StuH 42 L/28 突击榴弹炮',

  from: 'pattern gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/big_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'ger-105l28',
  amout: 1,
  calibre: 105,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.75,

  rechargeTime: 13.33,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    heat: {
      minRange: 0,
      aimRange: 500,
      maxRange: 500,
      speed: 496,
      gravity: 5,
      projectile: {
        nearest: 115,
        farthest: 115,
      },
      damage: 355,
      spreading: {
        radiusTable: {
          nearest: 1.652,
          farthest: 4.011,
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
      aimRange: 500,
      maxRange: 500,
      speed: 470,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 1.875,
          farthest: 4.212,
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
