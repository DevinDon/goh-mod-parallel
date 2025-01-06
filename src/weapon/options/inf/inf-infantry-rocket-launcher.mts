import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/stuff/standard/rocket-launcher/inf-infantry-rocket-launcher.weapon`,

  name: 'inf-infantry-rocket-launcher',
  description: '多用途火箭筒',

  entity: 'panzershreck_54',
  mass: 11,

  type: 'portable-rocket-launcher',

  fireSound: 'reactive/d1/Shared/Rocket_Launcher/',
  fireSoundClose: 'reactive/d1/Shared/Rocket_Launcher/',
  reloadSound: 'panzershreck',
  cursor: 'ironsights/rifle',

  ammo: 'inf-infantry-rocket',
  amout: 1,
  caliber: 100,
  syncedProjectiles: true,

  aimingTolerance: 0.1,
  spreadTolerance: 0.9,

  rechargeTime: 10,
  recoveryTime: 60 / 60,

  automatic: false,

  bullets: [
    {
      name: 'he',
      minRange: 0,
      aimRange: 75,
      maxRange: 100,
      speed: 100,
      gravity: 5,
      damageToArmor: 100,
      damageToHuman: 1000,
      spreading: {
        radiusTable: {
          nearest: 0.3,
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
      aimRange: 75,
      maxRange: 100,
      speed: 100,
      gravity: 5,
      projectile: 150,
      damageToArmor: 100,
      damageToHuman: 300,
      spreading: {
        radiusTable: {
          nearest: 0.3,
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
