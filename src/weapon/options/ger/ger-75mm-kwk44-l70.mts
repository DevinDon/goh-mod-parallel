import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-75mm-kwk44-l70.weapon`,

  name: 'ger-75mm-kwk44-l70',
  description: '德国 7.5cm KwK 44 L/70 坦克炮，适用于五号 F 型',

  type: 'gun',

  fireSound: 'cannon/s3/d1/Shared/Cannon_75to76mm/',
  fireSoundClose: 'cannon/s3/3p/Shared/Cannon_75to76mm/',
  reloadSound: 'utility/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-75l70',
  amout: 2,
  caliber: 75,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.2,

  rechargeTime: 8,
  recoveryTime: 5,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 2750,
      speed: 935,
      gravity: 5,
      projectile: [ 192, 188, 173, 156, 126 ],
      damageToArmor: 250,
      damageToHuman: 2500,
      spreading: {
        radiusTable: {
          nearest: 0.27,
          farthest: 1.555,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-75mm-apcbc',
    },
    {
      name: 'apcr',
      minRange: 0,
      maxRange: 2750,
      speed: 1130,
      gravity: 5,
      projectile: [ 228, 224, 204, 182, 145 ],
      damageToArmor: 200,
      damageToHuman: 2000,
      spreading: {
        radiusTable: {
          nearest: 0.25,
          farthest: 1.477,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-75mm-apcr',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2750,
      speed: 700,
      gravity: 5,
      damageToArmor: 400,
      damageToHuman: 4000,
      spreading: {
        radiusTable: {
          nearest: 0.435,
          farthest: 2.22,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
