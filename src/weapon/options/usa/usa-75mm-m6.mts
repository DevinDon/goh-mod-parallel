import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/39-usa/resource/set/stuff/standard/gun/usa-75mm-m6.weapon`,

  name: 'usa-75mm-m6',
  description: '美国 75mm M6 坦克炮，适用于 M24 霞飞轻型坦克 / M4A3 谢尔曼管风琴中型坦克',

  type: 'gun',

  fireSound: 'gun/gun_75_105',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/medium_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'usa-75x350',
  amout: 1,
  caliber: 75,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.8,

  rechargeTime: 7,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'ap',
      minRange: 0,
      maxRange: 2300,
      speed: 619,
      gravity: 5,
      projectile: [ 91, 88, 78, 67, 49 ],
      damageToArmor: 135,
      damageToHuman: 1350,
      spreading: {
        radiusTable: {
          nearest: 0.37,
          farthest: 2.73,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.10,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-75mm-ap',
    },
    {
      name: 'apcbc',
      minRange: 0,
      maxRange: 2300,
      speed: 619,
      gravity: 5,
      projectile: [ 104, 102, 93, 84, 68 ],
      damageToArmor: 135,
      damageToHuman: 1350,
      spreading: {
        radiusTable: {
          nearest: 0.33,
          farthest: 2.43,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.15,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-37mm-apcbc',
    },
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 2300,
      speed: 619,
      gravity: 5,
      projectile: [ 104, 102, 93, 84, 68 ],
      damageToArmor: 135,
      damageToHuman: 1350,
      spreading: {
        radiusTable: {
          nearest: 0.33,
          farthest: 2.43,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.15,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-37mm-apcbc',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2300,
      speed: 603,
      gravity: 5,
      damageToArmor: 200,
      damageToHuman: 2000,
      spreading: {
        radiusTable: {
          nearest: 1.5,
          farthest: 4.67,
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
      maxRange: 2300,
      speed: 603,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 1.5,
          farthest: 4.67,
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
