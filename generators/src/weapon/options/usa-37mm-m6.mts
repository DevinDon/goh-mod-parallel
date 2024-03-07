import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/usa-37mm-m6.weapon',

  name: 'usa-37mm-m6',
  description: '美国 37mm M6 坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'gun/gun_37_57',
  fireSoundClose: 'gun/gun_interior/size2',
  reloadSound: 'interior/large/small_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'usa-37',
  amout: 1,
  calibre: 37,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 4,
  recoveryTime: 1,

  automatic: false,
  bullets: [
    {
      name: 'ap',
      minRange: 0,
      aimRange: 250,
      maxRange: 250,
      speed: 884,
      gravity: 5,
      projectile: {
        nearest: 89,
        farthest: 27,
      },
      damageToArmor: 50,
      damageToHuman: 500,
      spreading: {
        radiusTable: {
          nearest: 0.37,
          farthest: 2.73,
          factor: 3.5,
        },
        burstRecoveryTime: 0.37,
        burstAccuracy: 100,
        spreadPower: 1.10,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-37mm-ap',
    },
    {
      name: 'apcbc',
      minRange: 0,
      aimRange: 250,
      maxRange: 250,
      speed: 619,
      gravity: 5,
      projectile: {
        nearest: 78,
        farthest: 43,
      },
      damageToArmor: 50,
      damageToHuman: 500,
      spreading: {
        radiusTable: {
          nearest: 0.33,
          farthest: 2.43,
          factor: 3.5,
        },
        burstRecoveryTime: 0.37,
        burstAccuracy: 100,
        spreadPower: 1.15,
        spreadXYRatio: 0.75,
      },
      overmatch: 'usa-37mm-apcbc',
    },
    {
      name: 'he',
      minRange: 0,
      aimRange: 250,
      maxRange: 250,
      speed: 792,
      gravity: 5,
      damageToArmor: 200,
      damageToHuman: 2000,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 3.2,
          factor: 4.0,
        },
        burstRecoveryTime: 0.37,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
