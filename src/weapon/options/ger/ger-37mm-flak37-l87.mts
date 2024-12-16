import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-37mm-flak37-l87.weapon`,

  name: 'ger-37mm-flak37-l87',
  description: '德国 3.7cm FlaK 37 L/87 防空炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s1/d1/Shared/Autocannon_37to40mm/',
  fireSoundClose: 'cannon/s1/1p/Shared/Autocannon_37to40mm/',
  reloadSound: 'tank/reload_small',
  cursor: 'ironsights/aa',

  ammo: 'ger-37l87',
  amout: 12,
  caliber: 37,
  syncedProjectiles: false,

  aimingTolerance: 3,
  spreadTolerance: 0.5,

  rechargeTime: 3,
  recoveryTime: 60 / 120,

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
      name: 'ap',
      minRange: 0,
      maxRange: 2400,
      speed: 770,
      gravity: 5,
      projectile: [ 49, 46, 33, 22, 10 ],
      damageToArmor: 55,
      damageToHuman: 550,
      spreading: {
        radiusTable: {
          nearest: 0.32,
          farthest: 1.8,
        },
        burstRecoveryTime: 0.37,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-37mm-ap',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2400,
      speed: 770,
      gravity: 5,
      damageToArmor: 110,
      damageToHuman: 1100,
      spreading: {
        radiusTable: {
          nearest: 0.38,
          farthest: 2.4,
        },
        burstRecoveryTime: 0.37,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 1.25,
      },
      falloffStrength: 0,
    },
  ],

};

export default options;
