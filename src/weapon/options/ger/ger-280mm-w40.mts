import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/reactive/ger-280mm-w40.weapon`,

  name: 'ger-280mm-w40',
  description: '德国 28cm Wurfrahmen 40 火箭发射器',

  from: 'pattern standard-reactive',

  tags: [ 'gun' ],

  fireSound: 'reactive/nebel_burst/',
  fireSoundClose: 'reactive/nebel_burst/',
  reloadSound: 'tank/reload_howitzer',
  cursor: 'ironsights/tank',
  cursorReloading: 'gun_he',

  ammo: 'ger-280mm-nebelwerfer he',
  amout: 1,
  caliber: 280,
  syncedProjectiles: true,
  curved: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.2,

  rechargeTime: 30,
  recoveryTime: 60 / 36,

  automatic: false,

  bullets: [
    {
      name: 'he',
      minRange: 25,
      maxRange: 2200,
      speed: 230,
      gravity: 9,
      damageToArmor: 1800,
      damageToHuman: 18000,
      spreading: {
        radiusTable: {
          nearest: 6,
          farthest: 28.7,
        },
        burstRecoveryTime: 6,
        burstAccuracy: 100,
        spreadPower: 1.66,
        spreadXYRatio: 1.15,
      },
    },
  ],

};

export default options;
