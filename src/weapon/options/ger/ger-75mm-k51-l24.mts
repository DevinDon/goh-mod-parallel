import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-75mm-k51-l24.weapon`,

  name: 'ger-75mm-k51-l24',
  description: '德国 7.5cm K 51 L/24 坦克炮，适用于 Sd.kfz 234/3',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s3/d1/Shared/Cannon_75to76mm_LV/',
  fireSoundClose: 'cannon/s3/3p/Shared/Cannon_75to76mm_LV/',
  reloadSound: 'utility/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-75l24',
  amout: 1,
  caliber: 75,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.2,

  rechargeTime: 4,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 1850,
      speed: 385,
      gravity: 5,
      projectile: {
        nearest: 50,
        farthest: 38,
      },
      damageToArmor: 150,
      damageToHuman: 1500,
      spreading: {
        radiusTable: {
          nearest: 0.7,
          farthest: 4.2,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-75mm-apcbc',
    },
    {
      name: 'heat',
      minRange: 0,
      maxRange: 1850,
      speed: 450,
      gravity: 5,
      projectile: {
        nearest: 115,
        farthest: 115,
      },
      damageToArmor: 130,
      damageToHuman: 1300,
      spreading: {
        radiusTable: {
          nearest: 0.9,
          farthest: 4.7,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 1850,
      speed: 450,
      gravity: 5,
      damageToArmor: 200,
      damageToHuman: 2000,
      spreading: {
        radiusTable: {
          nearest: 0.9,
          farthest: 4.7,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
    {
      name: 'sm',
      minRange: 0,
      maxRange: 1850,
      speed: 520,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 0.9,
          farthest: 4.7,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
