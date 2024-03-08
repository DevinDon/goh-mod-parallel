import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/ger-105mm-kwspzk-l68.weapon',

  name: 'ger-105mm-kwspzk-l68',
  description: '德国 10.5cm KwsPz.K L/68 实验性坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/big_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'ger-105l68',
  amout: 1,
  calibre: 105,
  syncedProjectiles: true,

  aimingTolerance: 0.2,
  spreadTolerance: 0.5,

  rechargeTime: 15.75,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      aimRange: 400,
      maxRange: 400,
      speed: 1000,
      gravity: 5,
      projectile: {
        nearest: 225,
        farthest: 171,
      },
      damageToArmor: 360,
      damageToHuman: 3600,
      spreading: {
        radiusTable: {
          nearest: 0.32,
          farthest: 2.22,
          factor: 3.5,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-105mm-apcbc',
    },
    {
      name: 'apcr',
      minRange: 0,
      aimRange: 400,
      maxRange: 400,
      speed: 1130,
      gravity: 5,
      projectile: {
        nearest: 285,
        farthest: 201,
      },
      damageToArmor: 315,
      damageToHuman: 3150,
      spreading: {
        radiusTable: {
          nearest: 0.299,
          farthest: 1.99,
          factor: 3.0,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-105mm-apcr',
    },
    {
      name: 'he',
      minRange: 0,
      aimRange: 400,
      maxRange: 400,
      speed: 750,
      gravity: 5,
      damageToArmor: 650,
      damageToHuman: 6500,
      spreading: {
        radiusTable: {
          nearest: 0.39,
          farthest: 2.98,
          factor: 4.0,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
