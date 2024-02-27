import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  name: 'ger-75mm-pak39-l48',
  description: '德国 7.5cm PaK 39 L/48 反坦克炮',

  from: 'pattern gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/medium_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'ger-75l43',
  amout: 1,
  calibre: 75,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 8,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    apcbche: {
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 750,
      gravity: 5,
      projectile: {
        nearest: 135,
        farthest: 86,
      },
      damage: 150,
      spreading: {
        radiusTable: {
          nearest: 0.37,
          farthest: 2.05,
          factor: 3.5,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-75mm-apcbc',
    },
    apcr: {
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 930,
      gravity: 5,
      projectile: {
        nearest: 176,
        farthest: 92,
      },
      damage: 110,
      spreading: {
        radiusTable: {
          nearest: 0.32,
          farthest: 1.66,
          factor: 3.0,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-75mm-apcr',
    },
    heat: {
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 400,
      gravity: 5,
      projectile: {
        nearest: 115,
        farthest: 115,
      },
      damage: 130,
      spreading: {
        radiusTable: {
          nearest: 0.49,
          farthest: 2.6,
          factor: 4.0,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    he: {
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 520,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 2.7,
          factor: 4.0,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
    sm: {
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 520,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 2.7,
          factor: 4.0,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  },

};

export default options;
