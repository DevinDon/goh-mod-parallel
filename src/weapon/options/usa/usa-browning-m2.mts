import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/39-usa/resource/set/stuff/standard/machine-gun/usa-browning-m2.weapon`,

  name: 'usa-browning-m2',
  description: '美国 Browning M2 重机枪',

  entity: 'browning_m2',
  mass: 38,

  from: 'pattern standard-machine-gun',

  tags: [ 'aa', 'gun' ],

  fireSound: 'smallarms/s4/d1/USA/M2HB/',
  fireSoundClose: 'smallarms/s4/d1/USA/M2HB/',
  reloadSound: 'dt',
  cursor: 'ironsights/mg',

  ammo: 'usa-hmgun api',
  amout: 100,
  calibre: 12.7,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.1,

  rechargeTime: 10,
  recoveryTime: 60 / 600,

  automatic: true,

  burst: {
    'short': {
      standard: 10,
      random: 2,
    },
    'long': {
      standard: 20,
      random: 3,
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
          farthest: 5.2,
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
