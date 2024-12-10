import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/reactive/ger-150mm-panzerwerfer.weapon`,

  name: 'ger-150mm-panzerwerfer',
  description: '德国 15cm 火箭发射器',

  from: 'pattern standard-reactive',

  tags: [ 'gun' ],

  fireSound: 'reactive/nebel_burst/',
  fireSoundClose: 'reactive/nebel_burst/',
  reloadSound: 'tank/reload_howitzer',
  cursor: 'ironsights/tank',
  cursorReloading: 'gun_he',

  ammo: 'ger-150mm-nebelwerfer he',
  amout: 1,
  calibre: 150,
  syncedProjectiles: true,
  curved: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.5,

  rechargeTime: 9,
  recoveryTime: 60 / 30,

  automatic: false,

  bullets: [
    {
      name: 'he',
      minRange: 25,
      maxRange: 500,
      effectiveRange: 500 / 4,
      speed: 340,
      gravity: 5,
      damageToArmor: 1000,
      damageToHuman: 10000,
      spreading: {
        radiusTable: {
          nearest: 5.112,
          farthest: 25.345 * 2,
          factor: 4.0,
        },
        burstRecoveryTime: 5.50,
        burstAccuracy: 100,
        spreadPower: 1.66,
        spreadXYRatio: 1.05,
      },
    },
  ],

};

export default options;
