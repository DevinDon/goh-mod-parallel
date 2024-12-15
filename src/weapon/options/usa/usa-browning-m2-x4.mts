import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/39-usa/resource/set/stuff/standard/machine-gun/usa-browning-m2-x4.weapon`,

  name: 'usa-browning-m2-x4',
  description: '美国四联 Browning M2 重机枪',

  entity: 'browning_m2',
  mass: 38,

  from: 'pattern standard-machine-gun',

  tags: [ 'aa', 'gun' ],

  fireSound: 'smallarms/s4/d1/USA/M2HB/',
  fireSoundClose: 'smallarms/s4/d1/USA/M2HB/',
  reloadSound: 'dt',
  cursor: 'ironsights/mg',

  ammo: 'usa-hmgun api',
  amout: 400,
  caliber: 12.7,
  syncedProjectiles: true,

  aimingTolerance: 3,
  spreadTolerance: 0.5,

  rechargeTime: 33,
  recoveryTime: 60 / 2400,

  automatic: true,

  burst: {
    'short': {
      standard: 20,
      random: 5,
    },
    'long': {
      standard: 30,
      random: 7,
    },
    rangeKoef: 0.5,
  },

  bullets: [
    {
      name: 'api',
      minRange: 0,
      maxRange: 1500,
      speed: 894,
      gravity: 5,
      projectile: {
        nearest: 30,
        farthest: 9,
      },
      damageToArmor: 12,
      damageToHuman: 175,
      spreading: {
        radiusTable: {
          nearest: 0.8,
          farthest: 7.2,
        },
        burstRecoveryTime: 0.2,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-rifle',
    },
  ],

};

export default options;
