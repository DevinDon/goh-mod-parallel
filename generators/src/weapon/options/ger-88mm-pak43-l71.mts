import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/ger-88mm-pak43-l71.weapon',

  name: 'ger-88mm-pak43-l71',
  description: '德国 8.8cm PaK 43 L/71 反坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'gun/gun_88',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/big_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'ger-88l71',
  amout: 1,
  calibre: 88,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 10.88,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      aimRange: 350,
      maxRange: 375,
      speed: 1000,
      gravity: 5,
      projectile: {
        nearest: 232,
        farthest: 176,
      },
      damageToArmor: 280,
      damageToHuman: 2800,
      spreading: {
        radiusTable: {
          nearest: 0.31,
          farthest: 1.97,
          factor: 3.5,
        },
        burstRecoveryTime: 0.888,
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
      speed: 1130,
      gravity: 5,
      projectile: {
        nearest: 304,
        farthest: 213,
      },
      damageToArmor: 235,
      damageToHuman: 2350,
      spreading: {
        radiusTable: {
          nearest: 0.288,
          farthest: 1.88,
          factor: 3.0,
        },
        burstRecoveryTime: 0.888,
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
      speed: 750,
      gravity: 5,
      damageToArmor: 450,
      damageToHuman: 4500,
      spreading: {
        radiusTable: {
          nearest: 0.37,
          farthest: 2.98,
          factor: 4.0,
        },
        burstRecoveryTime: 0.888,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
