import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/stuff/standard/machine-gun/inf-infantry-general-purpose-machine-gun.weapon`,

  name: 'inf-infantry-general-purpose-machine-gun',
  description: '通用机枪',

  type: 'machine-gun',

  entity: 'mg42_belt',
  mass: 11.57,

  tags: [ 'aa', 'gun' ],

  fireSound: 'smallarms/s3/d1/GER/MG42/',
  fireSoundClose: 'smallarms/s3/3p/GER/MG42/',
  reloadSound: 'mg42',
  cursor: 'ironsights/mg',

  ammo: 'inf-10mm-chain',
  amout: 240,
  caliber: 10,
  syncedProjectiles: true,

  aimingTolerance: 3,
  spreadTolerance: 0.5,

  rechargeTime: 10,
  recoveryTime: 60 / 1200,

  automatic: true,

  burst: {
    'short': {
      standard: 7,
      random: 2,
    },
    'long': {
      standard: 12,
      random: 3,
    },
    rangeKoef: 0.5,
  },

  bullets: [
    {
      name: 'ap',
      minRange: 0,
      maxRange: 1250,
      speed: 1000,
      gravity: 5,
      projectile: [ 13, 12, 7, 3, 0 ],
      damageToArmor: 10,
      damageToHuman: 200,
      spreading: {
        radiusTable: {
          nearest: 0.3,
          farthest: 5,
        },
        burstRecoveryTime: 0.1,
        burstAccuracy: 100,
        spreadPower: 1.40,
        spreadXYRatio: 0.90,
      },
      overmatch: 'ger-rifle',
    },
  ],

};

export default options;
