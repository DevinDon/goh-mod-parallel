import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/39-usa/resource/set/stuff/standard/gun/usa-76mm-m1a2.weapon`,

  name: 'usa-76mm-m1a2',
  description: '美国 76mm M1A2 坦克炮，适用于 M18 地狱猫坦克歼击车',

  type: 'gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/medium_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'usa-76x539',
  amout: 1,
  caliber: 76,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.2,

  rechargeTime: 7,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 2400,
      speed: 792,
      gravity: 5,
      projectile: [ 149, 146, 133, 119, 95 ],
      damageToArmor: 165,
      damageToHuman: 1650,
      spreading: {
        radiusTable: {
          nearest: 0.45,
          farthest: 3.43,
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
      maxRange: 2400,
      speed: 1036,
      gravity: 5,
      projectile: [ 190, 186, 167, 146, 112 ],
      damageToArmor: 130,
      damageToHuman: 1300,
      spreading: {
        radiusTable: {
          nearest: 0.375,
          farthest: 2.88,
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
      maxRange: 2400,
      speed: 820,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 1.5,
          farthest: 4.67,
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
      maxRange: 2400,
      speed: 270,
      gravity: 5,
      damageToArmor: 330,
      damageToHuman: 3300,
      spreading: {
        radiusTable: {
          nearest: 1.5,
          farthest: 4.67,
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
