import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-75mm-kwspzk-l70.weapon`,

  name: 'ger-75mm-kwspzk-l70',
  description: '德国 7.5 cm KwsPz.K L/70 实验性坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s3/d1/Shared/Cannon_75to76mm/',
  fireSoundClose: 'cannon/s3/3p/Shared/Cannon_75to76mm/',
  reloadSound: 'utility/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-75l70',
  amout: 2,
  calibre: 75,
  syncedProjectiles: true,

  aimingTolerance: 0.01,
  spreadTolerance: 0.5,

  rechargeTime: 8,
  recoveryTime: 5,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 2750,
      speed: 1075,
      gravity: 5,
      projectile: {
        nearest: 187,
        farthest: 151,
      },
      damageToArmor: 250,
      damageToHuman: 2500,
      spreading: {
        radiusTable: {
          nearest: 0.27,
          farthest: 1.555,
          factor: 3.5,
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
      speed: 1571,
      gravity: 5,
      projectile: {
        nearest: 239,
        farthest: 167,
      },
      damageToArmor: 200,
      damageToHuman: 2000,
      spreading: {
        radiusTable: {
          nearest: 0.25,
          farthest: 1.477,
          factor: 3.0,
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
      speed: 799,
      gravity: 5,
      damageToArmor: 400,
      damageToHuman: 4000,
      spreading: {
        radiusTable: {
          nearest: 0.435,
          farthest: 2.22,
          factor: 4.0,
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
