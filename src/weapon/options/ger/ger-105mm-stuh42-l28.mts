import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-105mm-stuh42-l28.weapon`,

  name: 'ger-105mm-stuh42-l28',
  description: '德国 10.5cm StuH 42 L/28 突击榴弹炮，适用于 42 型突击炮',

  type: 'gun',

  fireSound: 'cannon/s4/d1/Shared/Cannon_105to130mm_LV/',
  fireSoundClose: 'cannon/s2/1p/Shared/',
  reloadSound: 'tank/1p/medium_long/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-105l28',
  amout: 1,
  caliber: 105,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.75,

  rechargeTime: 12.35,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      maxRange: 2500,
      speed: 496,
      gravity: 5,
      projectile: 115,
      damageToArmor: 355,
      damageToHuman: 3550,
      spreading: {
        radiusTable: {
          nearest: 1.495,
          farthest: 5.321,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2500,
      speed: 470,
      gravity: 5,
      damageToArmor: 650,
      damageToHuman: 6500,
      spreading: {
        radiusTable: {
          nearest: 1.575,
          farthest: 6.212,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
