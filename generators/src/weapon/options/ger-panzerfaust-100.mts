import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/bazooka/ger-panzerfaust-100.weapon',

  name: 'ger-panzerfaust-100',
  description: '德国 Panzerfaust 100 "铁拳" 反坦克火箭筒',

  entity: 'panzerfaust_100',
  mass: 11,

  from: 'pattern standard-bazooka',

  tags: [ 'nokeep' ],

  fireSound: 'reactive/d1/GER/Panzerfaust/',
  fireSoundClose: 'reactive/3p/GER/Panzerfaust/',
  reloadSound: 'panzershreck',
  cursor: 'ironsights/rifle',

  ammo: 'ger-panzerfaust-100 heat',
  amout: 1,
  calibre: 100,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.9,

  rechargeTime: 1,
  recoveryTime: 60 / 60,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      aimRange: 100,
      maxRange: 100,
      speed: 60,
      gravity: 5,
      projectile: {
        nearest: 200,
        farthest: 200,
      },
      damageToArmor: 300,
      damageToHuman: 500,
      spreading: {
        radiusTable: {
          nearest: 1.8,
          farthest: 9.9,
          factor: 5.5,
        },
        burstRecoveryTime: 0.5,
        burstAccuracy: 100,
        spreadPower: 1.15,
        spreadXYRatio: 0.55,
      },
      overmatch: 'heat',
    },
  ],

  extra: [
    '{Inventory {Size 7 1}}',
    '{FillingVisible "faustrocket"}',
    '{AmmoLocked}',
  ],

};

export default options;
