import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/bazooka/ger-panzershreck-54.weapon`,

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

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 7,
  recoveryTime: 60 / 60,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      maxRange: 75,
      effectiveRange: 75 / 5,
      speed: 110,
      gravity: 5,
      projectile: {
        nearest: 185,
        farthest: 185,
      },
      damageToArmor: 100,
      damageToHuman: 500,
      spreading: {
        radiusTable: {
          nearest: 5 / 3,
          farthest: 12 / 2,
          factor: 7,
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
