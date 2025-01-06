import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-75mm-kwk42-l70.weapon`,

  name: 'ger-75mm-kwk42-l70',
  description: '德国 7.5cm KwK 42 L/70 坦克炮，适用于五号 A 型 / 五号 D 型 / 五号 G 型',

  type: 'gun',

  fireSound: 'cannon/s3/d1/Shared/Cannon_75to76mm_LV/',
  fireSoundClose: 'cannon/s2/1p/Shared/',
  reloadSound: 'tank/1p/medium_long/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-75l70',
  amout: 1,
  caliber: 75,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.9,

  rechargeTime: 8,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 2750,
      speed: 935,
      gravity: 5,
      projectile: [ 192, 188, 173, 156, 126 ],
      damageToArmor: 175,
      damageToHuman: 1750,
      spreading: {
        radiusTable: {
          nearest: 0.32,
          farthest: 1.775,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.50,
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
      damageToArmor: 130,
      damageToHuman: 1300,
      spreading: {
        radiusTable: {
          nearest: 0.29,
          farthest: 1.575,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.50,
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
      damageToArmor: 340,
      damageToHuman: 3400,
      spreading: {
        radiusTable: {
          nearest: 0.475,
          farthest: 2.55,
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
