import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/stuff/standard/rifle/inf-infantry-bolt-action-rifle.weapon`,

  name: 'inf-infantry-bolt-action-rifle',
  description: '栓动步枪',

  entity: 'k98',
  mass: 3.9,

  from: 'pattern standard-rifle',

  tags: [ 'bolt_action' ],

  fireSound: 'smallarms/s3/d1/GER/K98k/',
  fireSoundClose: 'smallarms/s3/3p/GER/K98k/',
  reloadSound: 'weapon_reload_loose_rifle_cartridges',
  cursor: 'ironsights/rifle',

  ammo: 'inf-10mm-clip',
  amout: 5,
  calibre: 10,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.1,

  rechargeTime: 5,
  recoveryTime: 60 / 50,

  automatic: false,

  bullets: [
    {
      name: 'ap',
      minRange: 0,
      maxRange: 1200 / 4,
      effectiveRange: 200 / 4,
      speed: 1000,
      gravity: 5,
      projectile: {
        nearest: 15,
        farthest: 3,
      },
      damageToArmor: 10,
      damageToHuman: 200,
      spreading: {
        radiusTable: {
          nearest: 0.2,
          farthest: 5 * 2,
        },
        burstRecoveryTime: 0.1,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 0.95,
      },
      overmatch: 'ger-rifle',
    },
  ],

};

export default options;
