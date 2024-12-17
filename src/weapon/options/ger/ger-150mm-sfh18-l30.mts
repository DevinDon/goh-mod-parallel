import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-150mm-sfh18-l30.weapon`,

  name: 'ger-150mm-sfh18-l30',
  description: '德国 15cm sFH 18 L/30 榴弹炮，适用于胡蜂自行火炮',

  type: 'gun',

  fireSound: 'cannon/s5/d1/Shared/Cannon_150to210mm/',
  fireSoundClose: 'cannon/s5/3p/Shared/Cannon_150to210mm/',
  reloadSound: 'utility/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-150l30',
  amout: 1,
  caliber: 150,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.75,

  rechargeTime: 22.5,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      maxRange: 2500,
      speed: 460,
      gravity: 5,
      projectile: 185,
      damageToArmor: 600,
      damageToHuman: 6000,
      spreading: {
        radiusTable: {
          nearest: 2.17,
          farthest: 9.56,
        },
        burstRecoveryTime: 1.50,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2500,
      speed: 204,
      gravity: 5,
      damageToArmor: 110,
      damageToHuman: 1100,
      spreading: {
        radiusTable: {
          nearest: 2.35,
          farthest: 11.21,
        },
        burstRecoveryTime: 1.50,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
