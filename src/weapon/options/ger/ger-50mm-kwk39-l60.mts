import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-50mm-kwk39-l60.weapon`,

  name: 'ger-50mm-kwk39-l60',
  description: '德国 5cm KwK 39 L/60 坦克炮，适用于三号 M 型',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s2/d1/Shared/Cannon_50to57mm_HV/',
  fireSoundClose: 'cannon/s1/1p/Shared/Cannon/',
  reloadSound: 'tank/1p/small_long/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-50l60',
  amout: 1,
  calibre: 50,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 3,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apche',
      minRange: 0,
      maxRange: 300,
      effectiveRange: 300 / 4,
      speed: 835,
      gravity: 5,
      projectile: {
        nearest: 97,
        farthest: 38,
      },
      damageToArmor: 110,
      damageToHuman: 110 * 10,
      spreading: {
        radiusTable: {
          nearest: 0.35,
          farthest: 1.9 * 2,
          factor: 3.5,
        },
        burstRecoveryTime: 0.5,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-50mm-apc',
    },
    {
      name: 'apcr',
      minRange: 0,
      maxRange: 300,
      effectiveRange: 300 / 4,
      speed: 1150,
      gravity: 5,
      projectile: {
        nearest: 150,
        farthest: 32,
      },
      damageToArmor: 75,
      damageToHuman: 750,
      spreading: {
        radiusTable: {
          nearest: 0.25,
          farthest: 1.6 * 2,
          factor: 3.0,
        },
        burstRecoveryTime: 0.5,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-50mm-apcr',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 300,
      effectiveRange: 300 / 4,
      speed: 550,
      gravity: 5,
      damageToArmor: 175,
      damageToHuman: 1750,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 2.3 * 2,
          factor: 4.0,
        },
        burstRecoveryTime: 0.5,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
