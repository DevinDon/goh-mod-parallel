import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/bazooka/ger-panzershreck-54.weapon',

  name: 'ger-panzershreck-54',
  description: '德国 PanzerShreck 54 "坦克杀手" 反坦克火箭筒',

  entity: 'panzershreck_54',
  mass: 11,

  from: 'pattern standard-bazooka',

  fireSound: 'reactive/d1/Shared/Rocket_Launcher/',
  fireSoundClose: 'reactive/d1/Shared/Rocket_Launcher/',
  reloadSound: 'panzershreck',
  cursor: 'ironsights/rifle',

  ammo: 'ger-panzershreck heat',
  amout: 1,
  calibre: 88,
  syncedProjectiles: true,

  aimingTolerance: 0.2,
  spreadTolerance: 0.5,

  rechargeTime: 7,
  recoveryTime: 60 / 60,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      aimRange: 150,
      maxRange: 150,
      speed: 110,
      gravity: 5,
      projectile: {
        nearest: 185,
        farthest: 185,
      },
      damageToArmor: 300,
      damageToHuman: 500,
      spreading: {
        radiusTable: {
          nearest: 3.2,
          farthest: 21.6,
          factor: 5.5,
        },
        burstRecoveryTime: 0.5,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.55,
      },
      overmatch: 'heat',
    },
  ],

};

export default options;
