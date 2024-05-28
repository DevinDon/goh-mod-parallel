import { ProjectModConfigDir } from '../../utils/constants.mjs';
import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-20mm-mg151-l55.weapon`,

  name: 'ger-20mm-mg151-l55',
  description: '德国 2cm MG 151 L/55 机炮',

  from: 'pattern standard-gun',

  mass: 42.7,

  fireSound: 'cannon/s1/d1/Shared/Autocannon_20to30mm/',
  fireSoundClose: 'cannon/s1/1p/Shared/Autocannon_20to30mm/',
  reloadSound: 'interior/large/auto_reload_interior',
  cursor: 'ironsights/aa',

  ammo: 'ger-20l55',
  amout: 150,
  calibre: 20,
  syncedProjectiles: true,

  aimingTolerance: 0.1,
  spreadTolerance: 0.1,

  rechargeTime: 5,
  recoveryTime: 60 / 750,

  automatic: true,

  burst: {
    short: {
      standard: 5,
      random: 1,
    },
    long: {
      standard: 10,
      random: 2,
    },
    rangeKoef: 0.45,
  },

  bullets: [
    {
      name: 'aphe',
      minRange: 0,
      aimRange: 275,
      maxRange: 275,
      speed: 805,
      gravity: 5,
      projectile: {
        nearest: 56,
        farthest: 31,
      },
      damageToArmor: 40,
      damageToHuman: 400,
      spreading: {
        radiusTable: {
          nearest: 0.29,
          farthest: 1.6,
          factor: 3.5,
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
