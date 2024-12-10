import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-105mm-stuh42-l28.weapon`,

  name: 'ger-105mm-stuh42-l28',
  description: '德国 10.5cm StuH 42 L/28 突击榴弹炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s4/d1/Shared/Cannon_105to130mm_LV/',
  fireSoundClose: 'cannon/s2/1p/Shared/',
  reloadSound: 'tank/1p/medium_long/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-105l28',
  amout: 1,
  calibre: 105,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.75,

  rechargeTime: 12.35,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      maxRange: 450,
      effectiveRange: 450,
      speed: 496,
      gravity: 5,
      projectile: {
        nearest: 115,
        farthest: 115,
      },
      damageToArmor: 355,
      damageToHuman: 3550,
      spreading: {
        radiusTable: {
          nearest: 1.495,
          farthest: 4.321,
          factor: 4.0,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 450,
      effectiveRange: 450,
      speed: 470,
      gravity: 5,
      damageToArmor: 650,
      damageToHuman: 6500,
      spreading: {
        radiusTable: {
          nearest: 1.575,
          farthest: 5.212,
          factor: 4.0,
        },
        burstRecoveryTime: 1.05,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
