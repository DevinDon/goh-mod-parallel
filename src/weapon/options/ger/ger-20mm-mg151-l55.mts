import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-20mm-mg151-l55.weapon`,

  name: 'ger-20mm-mg151-l55-x3',
  description: '德国 2cm MG 151 L/55 三联装机炮',

  type: 'gun',

  mass: 42.7,

  fireSound: 'cannon/s1/d1/Shared/Autocannon_20to30mm/',
  fireSoundClose: 'cannon/s1/1p/Shared/Autocannon_20to30mm/',
  reloadSound: 'interior/large/auto_reload_interior',
  cursor: 'ironsights/aa',

  ammo: 'ger-20l55',
  amout: 100,
  caliber: 20,
  syncedProjectiles: true,

  aimingTolerance: 3,
  spreadTolerance: 0.5,

  rechargeTime: 10,
  recoveryTime: 60 / 700,

  automatic: true,

  burst: {
    'short': {
      standard: 5,
      random: 1,
    },
    'long': {
      standard: 10,
      random: 2,
    },
    rangeKoef: 0.45,
  },

  bullets: [
    {
      name: 'aphe',
      minRange: 0,
      maxRange: 2000,
      speed: 805,
      gravity: 5,
      projectile: [ 27, 24, 14, 7, 2 ],
      damageToArmor: 40,
      damageToHuman: 400,
      spreading: {
        radiusTable: {
          nearest: 0.4,
          farthest: 2.1,
        },
        burstRecoveryTime: 0.2,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-20mm-ap',
    },
  ],

};

export default options;
