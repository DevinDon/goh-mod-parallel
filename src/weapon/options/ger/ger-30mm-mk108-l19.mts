import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-30mm-mk108-l19.weapon`,

  name: 'ger-30mm-mk108-l19',
  description: '德国 3cm MK 108 L/19 防空炮',

  from: 'pattern standard-gun',

  entity: 'mg42_belt',
  mass: 11.57,

  tags: [ 'mountable' ],

  fireSound: 'cannon/s1/d1/Shared/Autocannon_20to30mm/',
  fireSoundClose: 'cannon/s1/1p/Shared/Autocannon_20to30mm/',
  reloadSound: 'interior/reload_small',
  cursor: 'ironsights/aa',

  ammo: 'ger-30l38',
  amout: 100,
  caliber: 30,
  syncedProjectiles: true,

  aimingTolerance: 0.1,
  spreadTolerance: 0.1,

  rechargeTime: 10,
  recoveryTime: 60 / 650,

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
      name: 'he',
      minRange: 0,
      maxRange: 1500,
      speed: 540,
      gravity: 5,
      damageToArmor: 75,
      damageToHuman: 750,
      spreading: {
        radiusTable: {
          nearest: 0.7,
          farthest: 4.5,
        },
        burstRecoveryTime: 0.1,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.5,
      },
      falloffStrength: 0,
    },
  ],

  extra: [
    '{Foresight "foresight14"}',
  ],

};

export default options;
