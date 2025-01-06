import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-75mm-kwk40-l43.weapon`,

  name: 'ger-75mm-kwk40-l43',
  description: '德国 7.5cm KwK 40 L/43 坦克炮，适用于四号 F2 型 / 四号 G 型',

  type: 'gun',

  fireSound: 'cannon/s3/d1/Shared/Cannon_75to76mm_LV/',
  fireSoundClose: 'cannon/s2/1p/Shared/',
  reloadSound: 'tank/1p/medium/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-75l43',
  amout: 1,
  caliber: 75,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.9,

  rechargeTime: 7,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 2500,
      speed: 690,
      gravity: 5,
      projectile: [ 137, 135, 123, 110, 87 ],
      damageToArmor: 150,
      damageToHuman: 1500,
      spreading: {
        radiusTable: {
          nearest: 0.4,
          farthest: 2.2,
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
      maxRange: 2500,
      speed: 855,
      gravity: 5,
      projectile: [ 163, 159, 143, 126, 96 ],
      damageToArmor: 110,
      damageToHuman: 1100,
      spreading: {
        radiusTable: {
          nearest: 0.35,
          farthest: 1.75,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-75mm-apcr',
    },
    {
      name: 'heat',
      minRange: 0,
      maxRange: 2500,
      speed: 400,
      gravity: 5,
      projectile: 80,
      damageToArmor: 130,
      damageToHuman: 1300,
      spreading: {
        radiusTable: {
          nearest: 0.49,
          farthest: 2.6,
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
      maxRange: 2500,
      speed: 520,
      gravity: 5,
      damageToArmor: 260,
      damageToHuman: 26000,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 2.7,
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
      maxRange: 2500,
      speed: 520,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 2.7,
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
