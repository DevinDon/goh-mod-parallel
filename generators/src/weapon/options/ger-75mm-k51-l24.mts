import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/gun/ger-75mm-k51-l24.weapon',

  name: 'ger-75mm-k51-l24',
  description: '德国 7.5cm K 51 L/24 坦克炮，适用于 Sd.kfz 234/3',

  from: 'pattern gun',

  fireSound: 'gun/gun_75_105_short',
  fireSoundClose: 'gun/gun_75_105_short',
  reloadSound: 'tank/reload_medium',
  cursor: 'ironsights/tank2',

  ammo: 'ger-75l24',
  amout: 1,
  calibre: 75,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 6,
  recoveryTime: 1,

  automatic: false,

  bullets: {
    apcbche: {
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 385,
      gravity: 5,
      projectile: {
        nearest: 50,
        farthest: 38,
      },
      damage: 150,
      spreading: {
        radiusTable: {
          nearest: 0.4,
          farthest: 2.2,
          factor: 3.5,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-75mm-apcbc',
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
          nearest: 0.5,
          farthest: 2.7,
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
      speed: 450,
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
