import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  name: 'ger-600mm-karl-l8',
  description: '德国 60cm L/8 卡尔臼炮',

  from: 'pattern gun',

  fireSound: 'gun/gun_203_210',
  fireSoundClose: 'gun/gun_203_210',
  reloadSound: 'tank/reload_howitzer',
  cursor: 'ironsights/tank2',

  ammo: 'ger-600l8',
  amout: 1,
  calibre: 600,
  syncedProjectiles: true,
  curved: true,

  aimingTolerance: 1,
  spreadTolerance: 0.75,

  rechargeTime: 180,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    he: {
      minRange: 100,
      aimRange: 750,
      maxRange: 750,
      speed: 176,
      gravity: 9,
      spreading: {
        radiusTable: {
          nearest: 12.5,
          farthest: 35,
          factor: 4.0,
        },
        burstRecoveryTime: 6,
        burstAccuracy: 100,
        spreadPower: 1.66,
        spreadXYRatio: 1.15,
      },
    },
  },

};

export default options;
