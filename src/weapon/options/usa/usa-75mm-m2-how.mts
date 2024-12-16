import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/39-usa/resource/set/stuff/standard/gun/usa-75mm-m2-how.weapon`,

  name: 'usa-75mm-m2-how',
  description: '美国 75mm M2 坦克榴弹炮，适用于 M8 自行榴弹炮',

  type: 'gun',

  fireSound: 'gun/gun_75_105_short',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/medium_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'usa-75x272',
  amout: 1,
  caliber: 75,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.2,

  rechargeTime: 6,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      maxRange: 2000,
      speed: 305,
      gravity: 5,
      projectile: 89,
      damageToArmor: 115,
      damageToHuman: 1150,
      spreading: {
        radiusTable: {
          nearest: 2.555,
          farthest: 5.125,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.05,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2000,
      speed: 381,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 3.5,
          farthest: 7.67,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
    {
      name: 'sm',
      minRange: 0,
      maxRange: 2000,
      speed: 381,
      gravity: 5,
      damageToArmor: 310,
      damageToHuman: 3100,
      spreading: {
        radiusTable: {
          nearest: 3.5,
          farthest: 7.67,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
