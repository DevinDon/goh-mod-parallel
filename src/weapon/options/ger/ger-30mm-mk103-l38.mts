import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-30mm-mk103-l38.weapon`,

  name: 'ger-30mm-mk103-l38',
  description: '德国 3cm MK 103 L/38 防空炮，适用于蟋蟀 M 型',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s1/d1/Shared/Autocannon_20to30mm/',
  fireSoundClose: 'cannon/s1/1p/Shared/Autocannon_20to30mm/',
  reloadSound: 'interior/reload_small',
  cursor: 'ironsights/aa',

  ammo: 'ger-30l38',
  amout: 80,
  calibre: 30,
  syncedProjectiles: true,

  aimingTolerance: 0.1,
  spreadTolerance: 0.1,

  rechargeTime: 8,
  recoveryTime: 60 / 420,

  automatic: true,

  burst: {
    'short': {
      standard: 3,
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
      name: 'aphe',
      minRange: 0,
      maxRange: 1800,
      speed: 860,
      gravity: 5,
      projectile: {
        nearest: 100,
        farthest: 59,
      },
      damageToArmor: 50,
      damageToHuman: 500,
      spreading: {
        radiusTable: {
          nearest: 0.4,
          farthest: 2.1,
        },
        burstRecoveryTime: 0.1,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-30mm-ap',
    },
    {
      name: 'apcr',
      minRange: 0,
      maxRange: 1800,
      speed: 960,
      gravity: 5,
      projectile: {
        nearest: 111,
        farthest: 45,
      },
      damageToArmor: 30,
      damageToHuman: 300,
      spreading: {
        radiusTable: {
          nearest: 0.4,
          farthest: 2.1,
        },
        burstRecoveryTime: 0.1,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-30mm-apcr',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 1800,
      speed: 860,
      gravity: 5,
      damageToArmor: 75,
      damageToHuman: 750,
      spreading: {
        radiusTable: {
          nearest: 0.4,
          farthest: 3.0,
        },
        burstRecoveryTime: 0.1,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
      falloffStrength: 0,
    },
  ],

};

export default options;
