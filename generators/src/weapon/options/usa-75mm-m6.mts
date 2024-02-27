import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  name: 'usa-75mm-m6',
  description: '美国 75mm M6 坦克炮',

  from: 'pattern gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/medium_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'usa-75x350',
  amout: 1,
  calibre: 75,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 7,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    ap: {
      minRange: 0,
      aimRange: 300,
      maxRange: 300,
      speed: 619,
      gravity: 5,
      projectile: {
        nearest: 109,
        farthest: 51,
      },
      damage: 135,
      spreading: {
        radiusTable: {
          nearest: 0.37,
          farthest: 2.73,
          factor: 3.5,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.35,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-75mm-ap',
    },
    apcbc: {
      minRange: 0,
      aimRange: 300,
      maxRange: 300,
      speed: 619,
      gravity: 5,
      projectile: {
        nearest: 88,
        farthest: 59,
      },
      damage: 135,
      spreading: {
        radiusTable: {
          nearest: 0.33,
          farthest: 2.43,
          factor: 3.5,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.35,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-37mm-apcbc',
    },
    apcbche: {
      minRange: 0,
      aimRange: 300,
      maxRange: 300,
      speed: 619,
      gravity: 5,
      projectile: {
        nearest: 88,
        farthest: 59,
      },
      damage: 135,
      spreading: {
        radiusTable: {
          nearest: 0.33,
          farthest: 2.43,
          factor: 3.5,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.35,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-37mm-apcbc',
    },
    he: {
      minRange: 0,
      aimRange: 300,
      maxRange: 300,
      speed: 603,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 1.5,
          farthest: 4.67,
          factor: 4.0,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
    sm: {
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 603,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 1.5,
          farthest: 4.67,
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
