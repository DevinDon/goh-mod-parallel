import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/stuff/standard/machine-gun/inf-infantry-heavy-machine-gun.weapon`,

  name: 'inf-infantry-heavy-machine-gun',
  description: '通用重机枪',

  entity: 'browning_m2',
  mass: 30,

  from: 'pattern standard-machine-gun',

  tags: [ 'aa', 'gun' ],

  fireSound: 'smallarms/s4/d1/USA/M2HB/',
  fireSoundClose: 'smallarms/s4/d1/USA/M2HB/',
  reloadSound: 'dt',
  cursor: 'ironsights/mg',

  ammo: 'inf-15mm-chain',
  amout: 90,
  calibre: 15,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.1,

  rechargeTime: 15,
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
      name: 'ap',
      minRange: 0,
      maxRange: 1750,
      speed: 1150,
      gravity: 5,
      projectile: {
        nearest: 45,
        farthest: 17,
      },
      damageToArmor: 30,
      damageToHuman: 300,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 5,
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
