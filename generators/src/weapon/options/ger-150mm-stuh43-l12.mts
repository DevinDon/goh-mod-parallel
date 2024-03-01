import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/ger-150mm-stuh43-l12.weapon',

  name: 'ger-150mm-stuh43-l12',
  description: '德国 15cm StuH 43 L/11 突击步兵炮',

  from: 'pattern standard-gun',

  fireSound: 'gun/gun_122_152_short',
  fireSoundClose: 'gun/gun_interior/size4',
  reloadSound: 'interior/large/howitzer_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'ger-150l12',
  amout: 1,
  calibre: 150,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.75,

  rechargeTime: 25.15,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      aimRange: 750,
      maxRange: 750,
      speed: 280,
      gravity: 5,
      projectile: {
        nearest: 185,
        farthest: 185,
      },
      damageToArmor: 600,
      damageToHuman: 6000,
      spreading: {
        radiusTable: {
          nearest: 1.975,
          farthest: 6.712,
          factor: 4.0,
        },
        burstRecoveryTime: 1.50,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    {
      name: 'he',
      minRange: 0,
      aimRange: 750,
      maxRange: 750,
      speed: 280,
      gravity: 5,
      damageToArmor: 110,
      damageToHuman: 1100,
      spreading: {
        radiusTable: {
          nearest: 2.112,
          farthest: 7.345,
          factor: 4.0,
        },
        burstRecoveryTime: 1.50,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
