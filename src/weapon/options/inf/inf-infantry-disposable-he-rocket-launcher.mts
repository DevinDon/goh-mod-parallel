import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/stuff/standard/bazooka/inf-infantry-disposable-heat-rocket-launcher.weapon`,

  name: 'inf-infantry-disposable-heat-rocket-launcher',
  description: '一次性高爆火箭筒',

  entity: 'panzerfaust_100',
  mass: 11,

  from: 'pattern standard-bazooka',

  tags: [ 'nokeep' ],

  fireSound: 'reactive/d1/GER/Panzerfaust/',
  fireSoundClose: 'reactive/3p/GER/Panzerfaust/',
  reloadSound: 'panzershreck',
  cursor: 'ironsights/rifle',

  ammo: 'inf-infantry-rocket-launcher-ammo he',
  amout: 1,
  calibre: 100,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 1,
  recoveryTime: 60 / 60,

  automatic: false,

  bullets: [
    {
      name: 'he',
      minRange: 0,
      maxRange: 75,
      effectiveRange: 75,
      speed: 100,
      gravity: 5,
      damageToArmor: 100,
      damageToHuman: 1000,
      spreading: {
        radiusTable: {
          nearest: 5,
          farthest: 12,
          factor: 7,
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
