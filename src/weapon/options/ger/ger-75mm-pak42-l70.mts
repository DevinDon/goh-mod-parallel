import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-75mm-pak42-l70.weapon`,

  name: 'ger-75mm-pak42-l70',
  description: '德国 7.5cm Pak 42 L/70 反坦克炮，适用于 E-25 轻型坦克歼击车',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s3/d1/Shared/Cannon_75to76mm/',
  fireSoundClose: 'cannon/s3/3p/Shared/Cannon_75to76mm/',
  reloadSound: 'utility/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-75l70',
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
      maxRange: 375,
      effectiveRange: 375 / 2,
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
          nearest: 0.30 / 3,
          farthest: 1.655 / 2,
          factor: 3.5,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.55,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-75mm-apcbc',
    },
    {
      name: 'apcr',
      minRange: 0,
      maxRange: 375,
      effectiveRange: 375 / 2,
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
          nearest: 0.27 / 3,
          farthest: 1.501 / 2,
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
      maxRange: 375,
      effectiveRange: 375 / 2,
      speed: 700,
      gravity: 5,
      damageToArmor: 340,
      damageToHuman: 3400,
      spreading: {
        radiusTable: {
          nearest: 0.450 / 3,
          farthest: 2.35 / 2,
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
