import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-75mm-kwk40-l48.weapon`,

  name: 'ger-75mm-kwk40-l48',
  description: '德国 7.5cm KwK 40 L/48 坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s3/d1/Shared/Cannon_75to76mm_LV/',
  fireSoundClose: 'cannon/s2/1p/Shared/',
  reloadSound: 'tank/1p/medium/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-75l43',
  amout: 1,
  calibre: 75,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 7,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 2500,
      speed: 750,
      gravity: 5,
      projectile: {
        nearest: 135,
        farthest: 86,
      },
      damageToArmor: 150,
      damageToHuman: 1500,
      spreading: {
        radiusTable: {
          nearest: 0.37,
          farthest: 2.05,
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
      speed: 930,
      gravity: 5,
      projectile: {
        nearest: 176,
        farthest: 92,
      },
      damageToArmor: 110,
      damageToHuman: 1100,
      spreading: {
        radiusTable: {
          nearest: 0.32,
          farthest: 1.66,
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
      projectile: {
        nearest: 115,
        farthest: 115,
      },
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
      damageToHuman: 2600,
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
