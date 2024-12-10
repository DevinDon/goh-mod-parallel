import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-150mm-kwk44-l38.weapon`,

  name: 'ger-150mm-kwk44-l38',
  description: '德国 15 cm KwK 44 L/38 坦克炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s5/d1/Shared/Cannon_150to210mm/',
  fireSoundClose: 'cannon/s5/3p/Shared/',
  reloadSound: 'tank/1p/large/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-150l38',
  amout: 1,
  calibre: 150,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 24.75,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 425,
      effectiveRange: 425 / 2,
      speed: 975,
      gravity: 5,
      projectile: {
        nearest: 265,
        farthest: 221,
      },
      damageToArmor: 750,
      damageToHuman: 7500,
      spreading: {
        radiusTable: {
          nearest: 0.68,
          farthest: 3.953,
          factor: 3.5,
        },
        burstRecoveryTime: 1.50,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-128mm-apcbc',
    },
    {
      name: 'heat',
      minRange: 0,
      maxRange: 425,
      effectiveRange: 425 / 2,
      speed: 550,
      gravity: 5,
      projectile: {
        nearest: 251,
        farthest: 251,
      },
      damageToArmor: 600,
      damageToHuman: 6000,
      spreading: {
        radiusTable: {
          nearest: 0.776,
          farthest: 4.55,
          factor: 4.0,
        },
        burstRecoveryTime: 1.50,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 425,
      effectiveRange: 425 / 2,
      speed: 720,
      gravity: 5,
      damageToArmor: 990,
      damageToHuman: 9900,
      spreading: {
        radiusTable: {
          nearest: 0.888,
          farthest: 4.99,
          factor: 4.0,
        },
        burstRecoveryTime: 1.50,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
