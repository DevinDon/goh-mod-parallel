import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-20mm-kwk30-l55.weapon`,

  name: 'ger-20mm-kwk30-l55',
  description: '德国 2cm KwK 30 L/55 坦克炮，适用于 Sd.kfz 231',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s1/d1/Shared/Autocannon_20to30mm/',
  fireSoundClose: 'cannon/s1/1p/Shared/Autocannon_20to30mm/',
  reloadSound: 'interior/large/small_reload_interior',
  cursor: 'ironsights/aa',

  ammo: 'ger-20l55',
  amout: 10,
  calibre: 20,
  syncedProjectiles: true,

  aimingTolerance: 3,
  spreadTolerance: 0.1,

  rechargeTime: 2,
  recoveryTime: 60 / 220,

  automatic: true,

  burst: {
    'short': {
      standard: 2,
      random: 1,
    },
    'long': {
      standard: 5,
      random: 1,
    },
    rangeKoef: 0.45,
  },

  bullets: [
    {
      name: 'ap',
      minRange: 0,
      maxRange: 275,
      effectiveRange: 275,
      speed: 760,
      gravity: 5,
      projectile: {
        nearest: 45,
        farthest: 11,
      },
      damageToArmor: 30,
      damageToHuman: 300,
      spreading: {
        radiusTable: {
          nearest: 0.3,
          farthest: 1.7,
          factor: 3.5,
        },
        burstRecoveryTime: 0.1,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-20mm-ap',
    },
    {
      name: 'apcr',
      minRange: 0,
      maxRange: 275,
      effectiveRange: 275,
      speed: 1050,
      gravity: 5,
      projectile: {
        nearest: 63,
        farthest: 1,
      },
      damageToArmor: 20,
      damageToHuman: 200,
      spreading: {
        radiusTable: {
          nearest: 0.2,
          farthest: 1.5,
          factor: 3.0,
        },
        burstRecoveryTime: 0.1,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-20mm-apcr',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 275,
      effectiveRange: 275,
      speed: 900,
      gravity: 5,
      damageToArmor: 20,
      damageToHuman: 200,
      spreading: {
        radiusTable: {
          nearest: 0.4,
          farthest: 2.5,
          factor: 4.0,
        },
        burstRecoveryTime: 0.1,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
