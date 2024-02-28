import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  name: 'ger-150mm-sig33-l11',
  description: '德国 15cm sIG 33 L/11 步兵炮',

  from: 'pattern gun',

  fireSound: 'gun/gun_122_152_short',
  fireSoundClose: 'gun/gun_122_152_short',
  reloadSound: 'tank/reload_howitzer',
  cursor: 'ironsights/tank2',

  ammo: 'ger-150l11',
  amout: 1,
  calibre: 150,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.75,

  rechargeTime: 21.15,
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
          nearest: 3.143,
          farthest: 9.905,
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
      speed: 178,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 3.753,
          farthest: 11.905,
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
