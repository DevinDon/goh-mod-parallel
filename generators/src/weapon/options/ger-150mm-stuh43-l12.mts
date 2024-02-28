import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  name: 'ger-150mm-stuh43-l12',
  description: '德国 15cm StuH 43 L/11 突击步兵炮',

  from: 'pattern gun',

  fireSound: 'gun/gun_122_152_short',
  fireSoundClose: 'gun/gun_interior/size4',
  reloadSound: 'interior/large/howitzer_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'ger-150l12',
  amout: 1,
  calibre: 150,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.75,

  rechargeTime: 25.15,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    heat: {
      minRange: 0,
      aimRange: 750,
      maxRange: 750,
      speed: 280,
      gravity: 5,
      projectile: {
        nearest: 185,
        farthest: 185,
      },
      damage: 600,
      spreading: {
        radiusTable: {
          nearest: 2.975,
          farthest: 7.712,
          factor: 4.0,
        },
        burstRecoveryTime: 1.50,
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
      speed: 280,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 3.112,
          farthest: 8.905,
          factor: 4.0,
        },
        burstRecoveryTime: 1.50,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  },

};

export default options;
