import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/39-usa/resource/set/stuff/standard/gun/usa-90mm-m3.weapon`,

  name: 'usa-90mm-m3',
  description: '美国 90mm M3 坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/big_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'usa-90x600',
  amout: 1,
  caliber: 90,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 8.9,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'ap',
      minRange: 0,
      maxRange: 2700,
      speed: 823,
      gravity: 5,
      projectile: {
        nearest: 188,
        farthest: 96,
      },
      damageToArmor: 220,
      damageToHuman: 2200,
      spreading: {
        radiusTable: {
          nearest: 0.37,
          farthest: 2.73,
        },
        burstRecoveryTime: 0.9,
        burstAccuracy: 100,
        spreadPower: 1.10,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-90mm-ap',
    },
    {
      name: 'apbc',
      minRange: 0,
      maxRange: 2700,
      speed: 853,
      gravity: 5,
      projectile: {
        nearest: 164,
        farthest: 140,
      },
      damageToArmor: 220,
      damageToHuman: 2200,
      spreading: {
        radiusTable: {
          nearest: 0.33,
          farthest: 2.43,
        },
        burstRecoveryTime: 0.9,
        burstAccuracy: 100,
        spreadPower: 1.12,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-90mm-apbc',
    },
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 2700,
      speed: 853,
      gravity: 5,
      projectile: {
        nearest: 169,
        farthest: 127,
      },
      damageToArmor: 290,
      damageToHuman: 2900,
      spreading: {
        radiusTable: {
          nearest: 0.39,
          farthest: 2.59,
        },
        burstRecoveryTime: 0.9,
        burstAccuracy: 100,
        spreadPower: 1.15,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-90mm-apcbc',
    },
    {
      name: 'hvap',
      minRange: 0,
      maxRange: 2700,
      speed: 1018,
      gravity: 5,
      projectile: {
        nearest: 306,
        farthest: 193,
      },
      damageToArmor: 185,
      damageToHuman: 1850,
      spreading: {
        radiusTable: {
          nearest: 0.375,
          farthest: 2.88,
        },
        burstRecoveryTime: 0.9,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-90mm-hvap',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2700,
      speed: 823,
      gravity: 5,
      damageToArmor: 400,
      damageToHuman: 4000,
      spreading: {
        radiusTable: {
          nearest: 1.32,
          farthest: 4.67,
        },
        burstRecoveryTime: 0.9,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
