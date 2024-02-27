import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  name: 'ger-128mm-pak44-l61',
  description: '德国 12.8cm PaK 44 L/61 反坦克炮',

  from: 'pattern gun',

  fireSound: 'gun/gun_122_152',
  fireSoundClose: 'gun/gun_interior/size4',
  reloadSound: 'interior/large/howitzer_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'ger-128l61',
  amout: 1,
  calibre: 128,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 19.15,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    apcbche: {
      minRange: 0,
      aimRange: 400,
      maxRange: 400,
      speed: 920,
      gravity: 5,
      projectile: {
        nearest: 267,
        farthest: 208,
      },
      damage: 490,
      spreading: {
        radiusTable: {
          nearest: 0.55,
          farthest: 3.128,
          factor: 3.5,
        },
        burstRecoveryTime: 1.28,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-128mm-apcbc',
    },
    he: {
      minRange: 0,
      aimRange: 400,
      maxRange: 400,
      speed: 750,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 0.728,
          farthest: 4.33,
          factor: 4.0,
        },
        burstRecoveryTime: 1.28,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  },

};

export default options;
