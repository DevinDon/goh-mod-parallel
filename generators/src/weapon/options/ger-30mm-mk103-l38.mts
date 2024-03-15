import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/ger-30mm-mk103-l38.weapon',

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

  aimingTolerance: 3,
  spreadTolerance: 0.1,

  rechargeTime: 9,
  recoveryTime: 60 / 380,

  automatic: true,

  burst: {
    short: {
      standard: 3,
      random: 1,
    },
    long: {
      standard: 5,
      random: 1,
    },
    rangeKoef: 0.45,
  },

  bullets: [
    {
      name: 'apcr',
      minRange: 0,
      aimRange: 275,
      maxRange: 275,
      speed: 960,
      gravity: 5,
      projectile: {
        nearest: 111,
        farthest: 12,
      },
      damageToArmor: 30,
      damageToHuman: 300,
      spreading: {
        radiusTable: {
          nearest: 0.4,
          farthest: 2.1,
          factor: 3.0,
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
      aimRange: 275,
      maxRange: 275,
      speed: 860,
      gravity: 5,
      damageToArmor: 75,
      damageToHuman: 750,
      spreading: {
        radiusTable: {
          nearest: 0.4,
          farthest: 3.0,
          factor: 4.0,
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
