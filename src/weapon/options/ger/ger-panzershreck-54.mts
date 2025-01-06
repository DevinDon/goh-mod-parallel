import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/rocket-launcher/ger-panzershreck-54.weapon`,

  name: 'ger-panzershreck-54',
  description: '德国 PanzerShreck 54 "坦克杀手" 反坦克火箭筒',

  entity: 'panzershreck_54',
  mass: 11,

  type: 'portable-rocket-launcher',

  fireSound: 'reactive/d1/Shared/Rocket_Launcher/',
  fireSoundClose: 'reactive/d1/Shared/Rocket_Launcher/',
  reloadSound: 'panzershreck',
  cursor: 'ironsights/rifle',

  ammo: 'ger-panzershreck-54-rocket heat',
  amout: 1,
  caliber: 88,
  syncedProjectiles: true,

  aimingTolerance: 0.1,
  spreadTolerance: 0.9,

  rechargeTime: 7,
  recoveryTime: 60 / 60,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      maxRange: 100,
      speed: 110,
      gravity: 5,
      projectile: 185,
      damageToArmor: 100,
      damageToHuman: 500,
      spreading: {
        radiusTable: {
          nearest: 5,
          farthest: 12,
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
