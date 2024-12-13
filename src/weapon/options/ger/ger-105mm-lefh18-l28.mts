import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-105mm-lefh18-l28.weapon`,

  name: 'ger-105mm-lefh18-l28',
  description: '德国 10.5cm leFH 18 L/28 榴弹炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s4/d1/Shared/Cannon_105to130mm_LV/',
  fireSoundClose: 'cannon/s4/3p/Shared/Cannon_105to130mm_LV/',
  reloadSound: 'utility/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-105l28',
  amout: 1,
  caliber: 105,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.75,

  rechargeTime: 8.15,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'aphe',
      minRange: 0,
      maxRange: 2500,
      speed: 390,
      gravity: 5,
      projectile: {
        nearest: 73,
        farthest: 53,
      },
      damageToArmor: 410,
      damageToHuman: 4100,
      spreading: {
        radiusTable: {
          nearest: 1.123,
          farthest: 4.557,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-105mm-ap',
    },
    {
      name: 'heat',
      minRange: 0,
      maxRange: 2500,
      speed: 496,
      gravity: 5,
      projectile: {
        nearest: 104,
        farthest: 104,
      },
      damageToArmor: 355,
      damageToHuman: 3550,
      spreading: {
        radiusTable: {
          nearest: 1.456,
          farthest: 6.125,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2500,
      speed: 196,
      gravity: 5,
      damageToArmor: 650,
      damageToHuman: 6500,
      spreading: {
        radiusTable: {
          nearest: 1.678,
          farthest: 6.905,
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
