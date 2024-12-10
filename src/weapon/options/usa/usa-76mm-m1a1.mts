import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/39-usa/resource/set/stuff/standard/gun/usa-76mm-m1a1.weapon`,

  name: 'usa-76mm-m1a1',
  description: '美国 76mm M1A1 坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/medium_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'usa-76x539',
  amout: 1,
  calibre: 76,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 6,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 300,
      effectiveRange: 300,
      speed: 792,
      gravity: 5,
      projectile: {
        nearest: 125,
        farthest: 86,
      },
      damageToArmor: 165,
      damageToHuman: 1650,
      spreading: {
        radiusTable: {
          nearest: 0.49,
          farthest: 3.71,
          factor: 3.5,
        },
        burstRecoveryTime: 0.76,
        burstAccuracy: 100,
        spreadPower: 1.15,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-76mm-apcbc',
    },
    {
      name: 'hvap',
      minRange: 0,
      maxRange: 300,
      effectiveRange: 300,
      speed: 1036,
      gravity: 5,
      projectile: {
        nearest: 239,
        farthest: 124,
      },
      damageToArmor: 130,
      damageToHuman: 1300,
      spreading: {
        radiusTable: {
          nearest: 0.412,
          farthest: 2.99,
          factor: 3.5,
        },
        burstRecoveryTime: 0.76,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-76mm-hvap',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 300,
      effectiveRange: 300,
      speed: 820,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 1.6,
          farthest: 4.8,
          factor: 4.0,
        },
        burstRecoveryTime: 0.76,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
    {
      name: 'wp',
      minRange: 0,
      maxRange: 325,
      effectiveRange: 325,
      speed: 270,
      gravity: 5,
      damageToArmor: 330,
      damageToHuman: 3300,
      spreading: {
        radiusTable: {
          nearest: 1.5,
          farthest: 4.67,
          factor: 4.0,
        },
        burstRecoveryTime: 0.76,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
