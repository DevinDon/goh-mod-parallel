import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/ger-88mm-kwk36-l56-ace.weapon',

  name: 'ger-88mm-kwk36-l56-ace',
  description: '德国 8.8cm KwK 36 L/56 王牌坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'gun/gun_88',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/big_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'ger-88l56',
  amout: 1,
  calibre: 88,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 7.88,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      aimRange: 350,
      maxRange: 375,
      speed: 780,
      gravity: 5,
      projectile: {
        nearest: 162,
        farthest: 116,
      },
      damageToArmor: 240,
      damageToHuman: 2400,
      spreading: {
        radiusTable: {
          nearest: 0.27,
          farthest: 1.75,
          factor: 3.5,
        },
        burstRecoveryTime: 0.88,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-88mm-apcbc',
    },
    {
      name: 'apcr',
      minRange: 0,
      aimRange: 350,
      maxRange: 375,
      speed: 930,
      gravity: 5,
      projectile: {
        nearest: 219,
        farthest: 143,
      },
      damageToArmor: 195,
      damageToHuman: 1950,
      spreading: {
        radiusTable: {
          nearest: 0.23,
          farthest: 1.41,
          factor: 3.0,
        },
        burstRecoveryTime: 0.88,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-88mm-apcr',
    },
    {
      name: 'he',
      minRange: 0,
      aimRange: 350,
      maxRange: 375,
      speed: 820,
      gravity: 5,
      damageToArmor: 420,
      damageToHuman: 4200,
      spreading: {
        radiusTable: {
          nearest: 0.3,
          farthest: 2.1,
          factor: 4.0,
        },
        burstRecoveryTime: 0.88,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
