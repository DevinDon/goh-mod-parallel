import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/gun/ger-75mm-pak40-l46.weapon',

  name: 'ger-75mm-pak40-l46',
  description: '德国 7.5cm PaK 40 L/46 反坦克炮',

  from: 'pattern gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_75_105',
  reloadSound: 'interior/reload_medium',
  cursor: 'ironsights/tank2',

  ammo: 'ger-75l43',
  amout: 1,
  calibre: 75,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 6.25,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    apcbche: {
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 792,
      gravity: 5,
      projectile: {
        nearest: 146,
        farthest: 93,
      },
      damage: 150,
      spreading: {
        radiusTable: {
          nearest: 0.39,
          farthest: 2.35,
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
      speed: 990,
      gravity: 5,
      projectile: {
        nearest: 195,
        farthest: 102,
      },
      damage: 110,
      spreading: {
        radiusTable: {
          nearest: 0.34,
          farthest: 1.77,
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
      speed: 450,
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
      speed: 570,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 2.65,
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
