import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/stuff/standard/bazooka/inf-infantry-rocket-launcher.weapon`,

  name: 'inf-infantry-rocket-launcher',
  description: '多用途火箭筒',

  entity: 'panzershreck_54',
  mass: 11,

  from: 'pattern standard-bazooka',

  fireSound: 'reactive/d1/Shared/Rocket_Launcher/',
  fireSoundClose: 'reactive/d1/Shared/Rocket_Launcher/',
  reloadSound: 'panzershreck',
  cursor: 'ironsights/rifle',

  ammo: 'inf-infantry-rocket-launcher-ammo',
  amout: 1,
  caliber: 100,
  syncedProjectiles: true,

  aimingTolerance: 0.1,
  spreadTolerance: 0.1,

  rechargeTime: 10,
  recoveryTime: 60 / 60,

  automatic: false,

  bullets: [
    {
      name: 'he',
      minRange: 0,
      maxRange: 100,
      speed: 100,
      gravity: 5,
      damageToArmor: 100,
      damageToHuman: 1000,
      spreading: {
        radiusTable: {
          nearest: 0.25,
          farthest: 7,
        },
        burstRecoveryTime: 0.5,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.55,
      },
    },
    {
      name: 'heat',
      minRange: 0,
      maxRange: 100,
      speed: 100,
      gravity: 5,
      projectile: {
        nearest: 150,
        farthest: 150,
      },
      damageToArmor: 100,
      damageToHuman: 500,
      spreading: {
        radiusTable: {
          nearest: 0.25,
          farthest: 9,
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
