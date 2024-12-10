import { ProjectModConfigDir } from '../../utils/constants.mjs';
import { type WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-75mm-kwk42-l70.weapon`,

  name: 'ger-75mm-kwk42-l70',
  description: '德国 7.5cm KwK 42 L/70 坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s3/d1/Shared/Cannon_75to76mm_LV/',
  fireSoundClose: 'cannon/s2/1p/Shared/',
  reloadSound: 'tank/1p/medium_long/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-75l70',
  amout: 1,
  calibre: 75,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 8,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      aimRange: 350,
      maxRange: 375,
      speed: 935,
      gravity: 5,
      projectile: {
        nearest: 185,
        farthest: 116,
      },
      damageToArmor: 175,
      damageToHuman: 1750,
      spreading: {
        radiusTable: {
          nearest: 0.32,
          farthest: 1.775,
          factor: 3.5,
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
      aimRange: 350,
      maxRange: 375,
      speed: 1130,
      gravity: 5,
      projectile: {
        nearest: 265,
        farthest: 145,
      },
      damageToArmor: 130,
      damageToHuman: 1300,
      spreading: {
        radiusTable: {
          nearest: 0.29,
          farthest: 1.575,
          factor: 3.0,
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
      aimRange: 350,
      maxRange: 375,
      speed: 700,
      gravity: 5,
      damageToArmor: 340,
      damageToHuman: 3400,
      spreading: {
        radiusTable: {
          nearest: 0.475,
          farthest: 2.55,
          factor: 4.0,
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
