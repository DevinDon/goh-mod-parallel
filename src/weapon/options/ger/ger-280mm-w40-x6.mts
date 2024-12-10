import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/reactive/ger-280mm-w40-x6.weapon`,

  name: 'ger-280mm-w40-x6',
  description: '德国 28 cm Wurfrahmen 40 六联装火箭发射器',

  from: 'pattern standard-reactive',

  tags: [ 'gun' ],

  fireSound: 'reactive/nebel_burst/',
  fireSoundClose: 'reactive/nebel_burst/',
  reloadSound: 'tank/reload_howitzer',
  cursor: 'ironsights/tank',
  cursorReloading: 'gun_he',

  ammo: 'ger-280mm-nebelwerfer he',
  amout: 6,
  calibre: 280,
  syncedProjectiles: true,
  curved: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.5,

  rechargeTime: 240,
  recoveryTime: 60 / 36,

  automatic: false,

  bullets: [
    {
      name: 'he',
      minRange: 25,
      maxRange: 500,
      effectiveRange: 500 / 4,
      speed: 230,
      gravity: 9,
      damageToArmor: 1800,
      damageToHuman: 18000,
      spreading: {
        radiusTable: {
          nearest: 7,
          farthest: 31.5 * 2,
          factor: 5.0,
        },
        burstRecoveryTime: 9,
        burstAccuracy: 100,
        spreadPower: 1.66,
        spreadXYRatio: 1.15,
      },
    },
  ],

  extra: [
    `{Burst
  {min 6}
  {noaiming}
}`,
  ],

};

export default options;
