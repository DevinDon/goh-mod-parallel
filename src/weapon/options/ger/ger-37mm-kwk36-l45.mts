import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-37mm-kwk36-l45.weapon`,

  name: 'ger-37mm-kwk36-l45',
  description: '德国 3.7cm KwK 36 L/45 坦克炮，适用于山猫',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s1/d1/Shared/Cannon_37to40mm/',
  fireSoundClose: 'cannon/s1/1p/Shared/Cannon/',
  reloadSound: 'interior/large/small_reload_interior',
  cursor: 'ironsights/tank2',

  ammo: 'ger-37l45',
  amout: 1,
  calibre: 37,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 3,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'aphe',
      minRange: 0,
      maxRange: 275,
      effectiveRange: 275 / 3,
      speed: 740,
      gravity: 5,
      projectile: {
        nearest: 52,
        farthest: 18,
      },
      damageToArmor: 60,
      damageToHuman: 600,
      spreading: {
        radiusTable: {
          nearest: 0.3,
          farthest: 1.7,
          factor: 3.5,
        },
        burstRecoveryTime: 0.5,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-37mm-ap',
    },
    {
      name: 'apcr',
      minRange: 0,
      maxRange: 275,
      effectiveRange: 275 / 3,
      speed: 1020,
      gravity: 5,
      projectile: {
        nearest: 90,
        farthest: 5,
      },
      damageToArmor: 45,
      damageToHuman: 450,
      spreading: {
        radiusTable: {
          nearest: 0.2,
          farthest: 1.4,
          factor: 3.0,
        },
        burstRecoveryTime: 0.5,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-37mm-apcr',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 275,
      effectiveRange: 275 / 3,
      speed: 680,
      gravity: 5,
      damageToArmor: 110,
      damageToHuman: 1100,
      spreading: {
        radiusTable: {
          nearest: 0.4,
          farthest: 2.1,
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
