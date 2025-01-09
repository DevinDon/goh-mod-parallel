import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/stuff/standard/rocket-launcher/inf-infantry-disposable-he-rocket-launcher.weapon`,

  name: 'inf-infantry-disposable-he-rocket-launcher',
  description: '一次性高爆火箭筒',

  entity: 'panzerfaust_100',
  mass: 11,

  type: 'portable-rocket-launcher',

  tags: [ 'nokeep' ],

  fireSound: 'reactive/d1/GER/Panzerfaust/',
  fireSoundClose: 'reactive/3p/GER/Panzerfaust/',
  reloadSound: 'panzershreck',
  cursor: 'ironsights/rifle',

  ammo: 'inf-infantry-rocket he',
  amout: 1,
  caliber: 100,
  syncedProjectiles: true,

  aimingTolerance: 0.1,
  spreadTolerance: 0.8,

  rechargeTime: 1,
  recoveryTime: 60 / 60,

  automatic: false,

  bullets: [
    {
      name: 'he',
      minRange: 0,
      aimRange: 75,
      maxRange: 150,
      speed: 150,
      gravity: 5,
      damageToArmor: 400,
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
  ],

  extra: [
    '{Inventory {Size 7 1}}',
    '{FillingVisible "faustrocket"}',
    '{AmmoLocked}',
  ],

};

export default options;
