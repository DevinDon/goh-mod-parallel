import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/rifle/ger-karabiner-98k.weapon`,

  name: 'ger-karabiner-98k',
  description: '德国 Karabiner 98k 栓动步枪',

  entity: 'k98',
  mass: 3.9,

  from: 'pattern standard-rifle',

  tags: [ 'bolt_action' ],

  fireSound: 'smallarms/s3/d1/GER/K98k/',
  fireSoundClose: 'smallarms/s3/3p/GER/K98k/',
  reloadSound: 'weapon_reload_loose_rifle_cartridges',
  cursor: 'ironsights/rifle',

  ammo: 'ger-rifle clip',
  amout: 5,
  calibre: 7.92,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.1,

  rechargeTime: 4,
  recoveryTime: 60 / 50,

  automatic: false,

  bullets: [
    {
      name: 'clip',
      minRange: 0,
      maxRange: 200,
      effectiveRange: 200 / 5,
      speed: 760,
      gravity: 5,
      projectile: {
        nearest: 7,
        farthest: 3,
      },
      damageToArmor: 5,
      damageToHuman: 150,
      spreading: {
        radiusTable: {
          nearest: 0.2,
          farthest: 0.9 * 2,
          factor: 3.0,
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
