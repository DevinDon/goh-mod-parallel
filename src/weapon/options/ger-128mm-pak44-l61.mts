import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/ger-128mm-pak44-l61.weapon',

  name: 'ger-128mm-pak44-l61',
  description: '德国 12.8cm PaK 44 L/61 反坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s4/d1/Shared/Cannon_105to130mm/',
  fireSoundClose: 'cannon/s4/3p/Shared/Cannon_105to130mm/',
  reloadSound: 'tank/1p/large/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-128l61',
  amout: 1,
  calibre: 128,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 17.15,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      aimRange: 400,
      maxRange: 400,
      speed: 920,
      gravity: 5,
      projectile: {
        nearest: 267,
        farthest: 208,
      },
      damageToArmor: 490,
      damageToHuman: 4900,
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
    {
      name: 'he',
      minRange: 0,
      aimRange: 400,
      maxRange: 400,
      speed: 750,
      gravity: 5,
      damageToArmor: 990,
      damageToHuman: 9900,
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
  ],

};

export default options;
