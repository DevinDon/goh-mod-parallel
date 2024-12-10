import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/39-usa/resource/set/stuff/standard/gun/usa-90mm-t15e1.weapon`,

  name: 'usa-90mm-t15e1',
  description: '美国 90mm T15E1 坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/big_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'usa-90x1270',
  amout: 1,
  calibre: 90,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 12.5,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 325,
      effectiveRange: 325,
      speed: 975,
      gravity: 5,
      projectile: {
        nearest: 202,
        farthest: 171,
      },
      damageToArmor: 300,
      damageToHuman: 3000,
      spreading: {
        radiusTable: {
          nearest: 0.39,
          farthest: 2.59,
          factor: 3.5,
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
      maxRange: 325,
      effectiveRange: 325,
      speed: 1143,
      gravity: 5,
      projectile: {
        nearest: 258,
        farthest: 185,
      },
      damageToArmor: 225,
      damageToHuman: 2250,
      spreading: {
        radiusTable: {
          nearest: 0.345,
          farthest: 2.24,
          factor: 3.5,
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
      maxRange: 325,
      effectiveRange: 325,
      speed: 975,
      gravity: 5,
      damageToArmor: 430,
      damageToHuman: 4300,
      spreading: {
        radiusTable: {
          nearest: 1.32,
          farthest: 4.67,
          factor: 4.0,
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
