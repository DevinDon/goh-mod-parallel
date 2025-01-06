import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/stuff/standard/rocket-launcher/inf-infantry-disposable-heat-rocket-launcher.weapon`,

  name: 'inf-infantry-disposable-heat-rocket-launcher',
  description: '一次性破甲火箭筒',

  entity: 'panzerfaust_100',
  mass: 11,

  type: 'portable-rocket-launcher',

  tags: [ 'nokeep' ],

  fireSound: 'reactive/d1/GER/Panzerfaust/',
  fireSoundClose: 'reactive/3p/GER/Panzerfaust/',
  reloadSound: 'panzershreck',
  cursor: 'ironsights/rifle',

  ammo: 'inf-infantry-rocket heat',
  amout: 1,
  caliber: 100,
  syncedProjectiles: true,

  aimingTolerance: 0.1,
  spreadTolerance: 0.9,

  rechargeTime: 1,
  recoveryTime: 60 / 60,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      aimRange: 50,
      maxRange: 150,
      speed: 150,
      gravity: 3,
      projectile: 150,
      damageToArmor: 100,
      damageToHuman: 300,
      spreading: {
        radiusTable: {
          nearest: 0.2,
          farthest: 7,
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
