import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/ger-20mm-flak38-l112.weapon',

  name: 'ger-20mm-flak38-l112',
  description: '德国 2cm FlaK 30 L/112 防空炮，适用于 2cm FlaK 38 防空炮',

  from: 'pattern standard-gun',

  fireSound: 'gun/gun_auto',
  fireSoundClose: 'gun/gun_auto',
  reloadSound: 'tank/reload_small',
  cursor: 'ironsights/aa',

  ammo: 'ger-20l55',
  amout: 20,
  calibre: 20,
  syncedProjectiles: false,

  aimingTolerance: 12,
  spreadTolerance: 0.1,

  rechargeTime: 3,
  recoveryTime: 60 / 420,

  automatic: true,

  burst: {
    short: {
      standard: 10,
      random: 1,
    },
    long: {
      standard: 20,
      random: 2,
    },
    rangeKoef: 0.45,
  },

  bullets: [
    {
      name: 'ap',
      minRange: 0,
      aimRange: 275,
      maxRange: 275,
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
      aimRange: 275,
      maxRange: 275,
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
      aimRange: 275,
      maxRange: 275,
      speed: 900,
      gravity: 5,
      damageToArmor: 60,
      damageToHuman: 600,
      spreading: {
        radiusTable: {
          nearest: 0.4,
          farthest: 2.5,
          factor: 4.0,
        },
        burstRecoveryTime: 0.1,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 1.25,
      },
      falloffStrength: 0,
    },
  ],

};

export default options;
