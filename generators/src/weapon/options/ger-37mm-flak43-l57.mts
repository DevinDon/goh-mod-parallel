import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/ger-37mm-flak43-l57.weapon',

  name: 'ger-37mm-flak43-l57',
  description: '德国 3.7cm FlaK 43 L/57 防空炮，适用于东风自行防空炮',

  from: 'pattern standard-gun',

  fireSound: 'gun/gun_auto',
  fireSoundClose: 'gun/gun_auto',
  reloadSound: 'tank/reload_small',
  cursor: 'ironsights/aa',

  ammo: 'ger-37l87',
  amout: 16,
  calibre: 37,
  syncedProjectiles: false,

  aimingTolerance: 12,
  spreadTolerance: 0.1,

  rechargeTime: 2,
  recoveryTime: 60 / 160,

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
      name: 'ap',
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 770,
      gravity: 5,
      projectile: {
        nearest: 53,
        farthest: 22,
      },
      damageToArmor: 55,
      damageToHuman: 550,
      spreading: {
        radiusTable: {
          nearest: 0.33,
          farthest: 1.9,
          factor: 3.5,
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
      aimRange: 350,
      maxRange: 350,
      speed: 770,
      gravity: 5,
      damageToArmor: 110,
      damageToHuman: 1100,
      spreading: {
        radiusTable: {
          nearest: 0.4,
          farthest: 2.5,
          factor: 4.0,
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
