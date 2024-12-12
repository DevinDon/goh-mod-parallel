import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-150mm-stuh43-l12.weapon`,

  name: 'ger-150mm-stuh43-l12',
  description: '德国 15cm StuH 43 L/11 突击步兵炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s5/d1/Shared/Cannon_150to210mm/',
  fireSoundClose: 'cannon/s3/1p/Shared/',
  reloadSound: 'tank/1p/large/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-150l12',
  amout: 1,
  calibre: 150,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.75,

  rechargeTime: 23.15,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'heat',
      minRange: 0,
      maxRange: 2500,
      speed: 280,
      gravity: 5,
      projectile: {
        nearest: 185,
        farthest: 185,
      },
      damageToArmor: 600,
      damageToHuman: 6000,
      spreading: {
        radiusTable: {
          nearest: 1.975,
          farthest: 6.712,
          factor: 4.0,
        },
        burstRecoveryTime: 1.50,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'heat',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2500,
      speed: 280,
      gravity: 5,
      damageToArmor: 110,
      damageToHuman: 1100,
      spreading: {
        radiusTable: {
          nearest: 2.112,
          farthest: 7.345,
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
