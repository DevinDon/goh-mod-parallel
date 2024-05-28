import { ProjectModConfigDir } from '../../utils/constants.mjs';
import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-75mm-stuk40-l48.weapon`,

  name: 'ger-75mm-stuk40-l48',
  description: '德国 7.5cm StuK 40 L/48 突击坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s3/d1/Shared/Cannon_75to76mm/',
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
      aimRange: 325,
      maxRange: 325,
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
          nearest: 0.35,
          farthest: 1.92,
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
      aimRange: 325,
      maxRange: 325,
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
          nearest: 0.31,
          farthest: 1.57,
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
      name: 'heat',
      minRange: 0,
      aimRange: 325,
      maxRange: 325,
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
          nearest: 0.49,
          farthest: 2.55,
          factor: 4.0,
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
      aimRange: 325,
      maxRange: 325,
      speed: 570,
      gravity: 5,
      damageToArmor: 260,
      damageToHuman: 2600,
      spreading: {
        radiusTable: {
          nearest: 0.49,
          farthest: 2.55,
          factor: 4.0,
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
      aimRange: 325,
      maxRange: 325,
      speed: 570,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 0.49,
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
