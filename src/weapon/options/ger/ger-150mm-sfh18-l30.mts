import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-150mm-sfh18-l30.weapon`,

  name: 'ger-150mm-sfh18-l30',
  description: '德国 15cm sFH 18 L/30 榴弹炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s5/d1/Shared/Cannon_150to210mm/',
  fireSoundClose: 'cannon/s5/3p/Shared/Cannon_150to210mm/',
  reloadSound: 'utility/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-150l30',
  amout: 1,
  calibre: 150,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.75,

  rechargeTime: 22.5,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      maxRange: 500,
      effectiveRange: 500 / 2,
      speed: 460,
      gravity: 5,
      projectile: {
        nearest: 185,
        farthest: 185,
      },
      damageToArmor: 600,
      damageToHuman: 6000,
      spreading: {
        radiusTable: {
          nearest: 2.17,
          farthest: 6.56,
          factor: 4.0,
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
      maxRange: 500,
      effectiveRange: 500 / 2,
      speed: 204,
      gravity: 5,
      damageToArmor: 110,
      damageToHuman: 1100,
      spreading: {
        radiusTable: {
          nearest: 2.35,
          farthest: 8.21,
          factor: 4.0,
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
