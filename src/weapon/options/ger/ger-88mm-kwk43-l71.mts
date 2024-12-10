import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-88mm-kwk43-l71.weapon`,

  name: 'ger-88mm-kwk43-l71',
  description: '德国 8.8cm KwK 43 L/71 坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s4/d1/Shared/Cannon_85to100mm_HV/',
  fireSoundClose: 'cannon/s2/1p/Shared/',
  reloadSound: 'tank/1p/medium_long/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-88l71',
  amout: 1,
  calibre: 88,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 10.88,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 375,
      effectiveRange: 375 / 2,
      speed: 1000,
      gravity: 5,
      projectile: {
        nearest: 232,
        farthest: 176,
      },
      damageToArmor: 300,
      damageToHuman: 3000,
      spreading: {
        radiusTable: {
          nearest: 0.31,
          farthest: 1.97,
          factor: 3.5,
        },
        burstRecoveryTime: 0.888,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-88mm-apcbc',
    },
    {
      name: 'apcr',
      minRange: 0,
      maxRange: 375,
      effectiveRange: 375 / 2,
      speed: 1130,
      gravity: 5,
      projectile: {
        nearest: 304,
        farthest: 213,
      },
      damageToArmor: 260,
      damageToHuman: 2600,
      spreading: {
        radiusTable: {
          nearest: 0.288,
          farthest: 1.88,
          factor: 3.0,
        },
        burstRecoveryTime: 0.888,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-88mm-apcr',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 375,
      effectiveRange: 375 / 2,
      speed: 750,
      gravity: 5,
      damageToArmor: 550,
      damageToHuman: 5500,
      spreading: {
        radiusTable: {
          nearest: 0.37,
          farthest: 2.98,
          factor: 4.0,
        },
        burstRecoveryTime: 0.888,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
