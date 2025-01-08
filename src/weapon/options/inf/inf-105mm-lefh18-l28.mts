import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/stuff/standard/gun/inf-105mm-lefh18-l28.weapon`,

  name: 'inf-105mm-lefh18-l28',
  description: '德国 10.5cm leFH 18 L/28 榴弹炮，适用于 Sd.Kfz 124 黄蜂自行火炮',

  type: 'gun',

  fireSound: 'cannon/s4/d1/Shared/Cannon_105to130mm_LV/',
  fireSoundClose: 'cannon/s4/3p/Shared/Cannon_105to130mm_LV/',
  reloadSound: 'utility/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-105l28',
  amout: 1000000,
  caliber: 105,
  syncedProjectiles: true,

  aimingTolerance: 3,
  spreadTolerance: 0.1,

  rechargeTime: 10,
  recoveryTime: 1,

  automatic: true,

  bullets: [
    {
      name: 'aphe',
      minRange: 0,
      maxRange: 2500,
      speed: 390,
      gravity: 5,
      projectile: [ 73, 60, 44, 31, 10 ],
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
      projectile: 115,
      damageToArmor: 355,
      damageToHuman: 3550,
      spreading: {
        radiusTable: {
          nearest: 1.456,
          farthest: 7.125,
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
          farthest: 7.905,
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
