import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/gun/ger-50mm-kwk39-l60.weapon',

  name: 'ger-50mm-kwk39-l60',
  description: '德国 5cm KwK 39 L/60 坦克炮，适用于三号 M 型',

  from: 'pattern gun',

  fireSound: 'gun/gun_37_57',
  fireSoundClose: 'gun/gun_interior/size2',
  reloadSound: 'interior/large/small_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'ger-50l60',
  amout: 1,
  calibre: 50,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 5,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    apche: {
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 835,
      gravity: 5,
      projectile: {
        nearest: 97,
        farthest: 38,
      },
      damage: 110,
      spreading: {
        radiusTable: {
          nearest: 0.35,
          farthest: 1.9,
          factor: 3.5,
        },
        burstRecoveryTime: 0.5,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-50mm-apc',
    },
    apcr: {
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 1150,
      gravity: 5,
      projectile: {
        nearest: 150,
        farthest: 32,
      },
      damage: 75,
      spreading: {
        radiusTable: {
          nearest: 0.25,
          farthest: 1.6,
          factor: 3.0,
        },
        burstRecoveryTime: 0.5,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-50mm-apcr',
    },
    he: {
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 550,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 2.3,
          factor: 4.0,
        },
        burstRecoveryTime: 0.5,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  },

};

export default options;
