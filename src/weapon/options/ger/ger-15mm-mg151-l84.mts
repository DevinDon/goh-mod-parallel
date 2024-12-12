import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-15mm-mg151-l84.weapon`,

  name: 'ger-15mm-mg151-l84',
  description: '德国 1.5cm MG 151 L/55 机炮',

  from: 'pattern standard-gun',

  mass: 38.1,

  fireSound: 'cannon/s1/d1/Shared/Autocannon_20to30mm/',
  fireSoundClose: 'cannon/s1/1p/Shared/Autocannon_20to30mm/',
  reloadSound: 'interior/large/auto_reload_interior',
  cursor: 'ironsights/aa',

  ammo: 'ger-15l84',
  amout: 150,
  calibre: 15,
  syncedProjectiles: true,

  aimingTolerance: 0.1,
  spreadTolerance: 0.1,

  rechargeTime: 8,
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
      maxRange: 1750,
      speed: 960,
      gravity: 5,
      projectile: {
        nearest: 30,
        farthest: 8,
      },
      damageToArmor: 30,
      damageToHuman: 300,
      spreading: {
        radiusTable: {
          nearest: 0.35,
          farthest: 1.8,
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
