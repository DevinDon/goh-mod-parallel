import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/bazooka/ger-panzerfaust-100.weapon`,

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
  caliber: 149,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 1,
  recoveryTime: 60 / 60,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      maxRange: 100,
      speed: 60,
      gravity: 3,
      projectile: {
        nearest: 200,
        farthest: 200,
      },
      damageToArmor: 150,
      damageToHuman: 500,
      spreading: {
        radiusTable: {
          nearest: 4,
          farthest: 10,
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
