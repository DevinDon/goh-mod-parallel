import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/machine-gun/ger-mg42.weapon',

  name: 'ger-mg42',
  description: '德国 MG42 通用机枪',

  entity: 'mg42_belt',
  mass: 11.57,

  from: 'pattern standard-machine-gun',

  tags: [ 'aa', 'gun' ],

  fireSound: 'smallarms/s3/d1/GER/MG42/',
  fireSoundClose: 'smallarms/s3/3p/GER/MG42/',
  reloadSound: 'mg42',
  cursor: 'ironsights/mg',

  ammo: 'ger-mgun api',
  amout: 250,
  calibre: 7.92,
  syncedProjectiles: true,

  aimingTolerance: 0.2,
  spreadTolerance: 0.1,

  rechargeTime: 7,
  recoveryTime: 60 / 1500,

  automatic: true,

  burst: {
    short: {
      standard: 7,
      random: 2,
    },
    long: {
      standard: 12,
      random: 3,
    },
    rangeKoef: 0.5,
  },

  bullets: [
    {
      name: 'api',
      minRange: 0,
      aimRange: 250,
      maxRange: 250,
      speed: 740,
      gravity: 5,
      projectile: {
        nearest: 14,
        farthest: 5,
      },
      damageToArmor: 8,
      damageToHuman: 125,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 4.2,
          factor: 3.5,
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
