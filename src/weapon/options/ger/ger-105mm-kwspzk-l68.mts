import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-105mm-kwspzk-l68.weapon`,

  name: 'ger-105mm-kwspzk-l68',
  description: '德国 10.5cm KwsPz.K L/68 实验性坦克炮，适用于六号坦克 B 型亨舍尔炮塔 10.5cm KwsPz.K L/68 实验性坦克炮',

  type: 'gun',

  fireSound: 'cannon/s4/d1/Shared/Cannon_85to100mm_HV/',
  fireSoundClose: 'cannon/s2/1p/Shared/',
  reloadSound: 'tank/1p/large/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-105l68',
  amout: 1,
  caliber: 105,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.2,

  rechargeTime: 13.25,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 2850,
      speed: 1000,
      gravity: 5,
      projectile: [ 251, 248, 234, 219, 191 ],
      damageToArmor: 420,
      damageToHuman: 4200,
      spreading: {
        radiusTable: {
          nearest: 0.32,
          farthest: 2.22,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-105mm-apcbc',
    },
    {
      name: 'apcr',
      minRange: 0,
      maxRange: 2850,
      speed: 1130,
      gravity: 5,
      projectile: [ 304, 298, 274, 248, 201 ],
      damageToArmor: 375,
      damageToHuman: 3750,
      spreading: {
        radiusTable: {
          nearest: 0.299,
          farthest: 1.99,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-105mm-apcr',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2850,
      speed: 750,
      gravity: 5,
      damageToArmor: 750,
      damageToHuman: 7500,
      spreading: {
        radiusTable: {
          nearest: 0.39,
          farthest: 2.98,
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
