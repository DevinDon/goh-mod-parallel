import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/39-usa/resource/set/stuff/standard/gun/usa-37mm-m6.weapon`,

  name: 'usa-37mm-m6',
  description: '美国 37mm M6 坦克炮，适用于 M8 灰狗轮式装甲车',

  type: 'gun',

  fireSound: 'gun/gun_37_57',
  fireSoundClose: 'gun/gun_interior/size2',
  reloadSound: 'interior/large/small_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'usa-37',
  amout: 1,
  caliber: 37,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.9,

  rechargeTime: 4,
  recoveryTime: 1,

  automatic: false,
  bullets: [
    {
      name: 'ap',
      minRange: 0,
      maxRange: 2000,
      speed: 884,
      gravity: 5,
      projectile: [ 79, 76, 65, 54, 37 ],
      damageToArmor: 50,
      damageToHuman: 500,
      spreading: {
        radiusTable: {
          nearest: 0.37,
          farthest: 2.73,
        },
        burstRecoveryTime: 0.37,
        burstAccuracy: 100,
        spreadPower: 1.10,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-37mm-ap',
    },
    {
      name: 'apcbc',
      minRange: 0,
      maxRange: 2000,
      speed: 619,
      gravity: 5,
      projectile: [ 87, 84, 73, 60, 41 ],
      damageToArmor: 50,
      damageToHuman: 500,
      spreading: {
        radiusTable: {
          nearest: 0.33,
          farthest: 2.43,
        },
        burstRecoveryTime: 0.37,
        burstAccuracy: 100,
        spreadPower: 1.15,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-37mm-apcbc',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2000,
      speed: 792,
      gravity: 5,
      damageToArmor: 200,
      damageToHuman: 2000,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 3.2,
        },
        burstRecoveryTime: 0.37,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
