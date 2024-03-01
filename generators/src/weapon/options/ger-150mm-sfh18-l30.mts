import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/ger-150mm-sfh18-l30.weapon',

  name: 'ger-150mm-sfh18-l30',
  description: '德国 15cm sFH 18 L/30 榴弹炮',

  from: 'pattern gun',

  fireSound: 'gun/gun_122_152',
  fireSoundClose: 'gun/gun_122_152',
  reloadSound: 'tank/reload_howitzer',
  cursor: 'ironsights/tank2',

  ammo: 'ger-150l30',
  amout: 1,
  calibre: 150,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.75,

  rechargeTime: 23.5,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    heat: {
      minRange: 0,
      aimRange: 750,
      maxRange: 750,
      speed: 460,
      gravity: 5,
      projectile: {
        nearest: 185,
        farthest: 185,
      },
      damage: 600,
      spreading: {
        radiusTable: {
          nearest: 2.77,
          farthest: 8.07,
          factor: 4.0,
        },
        burstRecoveryTime: 1.50,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    he: {
      minRange: 0,
      aimRange: 750,
      maxRange: 750,
      speed: 204,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 3.01,
          farthest: 9.21,
          factor: 4.0,
        },
        burstRecoveryTime: 1.50,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
    },
  },

};

export default options;
