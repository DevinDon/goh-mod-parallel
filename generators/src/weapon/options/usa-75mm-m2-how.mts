import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/gun/usa-75mm-m2-how.weapon',

  name: 'usa-75mm-m2-how',
  description: '美国 75mm M2 坦克榴弹炮',

  from: 'pattern standard-gun',

  fireSound: 'gun/gun_75_105_short',
  fireSoundClose: 'gun/gun_interior/size3',
  reloadSound: 'interior/large/medium_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'usa-75x272',
  amout: 1,
  calibre: 75,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 6,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      aimRange: 300,
      maxRange: 300,
      speed: 305,
      gravity: 5,
      projectile: {
        nearest: 91,
        farthest: 91,
      },
      damageToArmor: 115,
      damageToHuman: 1150,
      spreading: {
        radiusTable: {
          nearest: 2.555,
          farthest: 5.125,
          factor: 4.0,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.05,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    {
      name: 'he',
      minRange: 0,
      aimRange: 300,
      maxRange: 300,
      speed: 381,
      gravity: 5,
      spreading: {
        radiusTable: {
          nearest: 3.5,
          farthest: 7.67,
          factor: 4.0,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
    {
      name: 'sm',
      minRange: 0,
      aimRange: 350,
      maxRange: 350,
      speed: 381,
      gravity: 5,
      damageToArmor: 310,
      damageToHuman: 3100,
      spreading: {
        radiusTable: {
          nearest: 3.5,
          farthest: 7.67,
          factor: 4.0,
        },
        burstRecoveryTime: 0.75,
        burstAccuracy: 100,
        spreadPower: 1.00,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
