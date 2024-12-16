import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-88mm-pak43-l71.weapon`,

  name: 'ger-88mm-pak43-l71',
  description: '德国 8.8cm PaK 43 L/71 反坦克炮，适用于猎豹坦克歼击车 G1 型',

  type: 'gun',

  fireSound: 'cannon/s4/d1/Shared/Cannon_85to100mm_HV/',
  fireSoundClose: 'cannon/s4/3p/Shared/Cannon_85to100mm_HV/',
  reloadSound: 'utility/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-88l71',
  amout: 1,
  caliber: 88,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.2,

  rechargeTime: 10.11,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 2700,
      speed: 1000,
      gravity: 5,
      projectile: [ 237, 234, 222, 207, 180 ],
      damageToArmor: 300,
      damageToHuman: 3000,
      spreading: {
        radiusTable: {
          nearest: 0.31,
          farthest: 1.97,
        },
        burstRecoveryTime: 0.888,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-88mm-apcbc',
    },
    {
      name: 'apcr',
      minRange: 0,
      maxRange: 2700,
      speed: 1130,
      gravity: 5,
      projectile: [ 279, 273, 252, 227, 185 ],
      damageToArmor: 260,
      damageToHuman: 2600,
      spreading: {
        radiusTable: {
          nearest: 0.288,
          farthest: 1.88,
        },
        burstRecoveryTime: 0.888,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-88mm-apcr',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2700,
      speed: 750,
      gravity: 5,
      damageToArmor: 500,
      damageToHuman: 5000,
      spreading: {
        radiusTable: {
          nearest: 0.37,
          farthest: 2.98,
        },
        burstRecoveryTime: 0.888,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
