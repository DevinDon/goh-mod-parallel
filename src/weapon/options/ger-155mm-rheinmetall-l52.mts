import { ProjectModConfigDir } from '../../utils/constants.mjs';
import { type WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/40-inf-spg/resource/set/stuff/standard/gun/ger-155mm-rheinmetall-l52.weapon`,

  name: 'ger-155mm-rheinmetall-l52',
  description: '德国 15cm 莱茵金属 L/52 榴弹炮',

  from: 'pattern standard-gun',

  fireSound: 'cannon/s5/d1/Shared/Cannon_150to210mm/',
  fireSoundClose: 'cannon/s3/1p/Shared/',
  reloadSound: 'tank/1p/large/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-155l52',
  amout: 12,
  calibre: 155,
  syncedProjectiles: true,

  aimingTolerance: 0.02,
  spreadTolerance: 0.65,

  rechargeTime: 60,
  recoveryTime: 5,

  automatic: true,

  bullets: [
    {
      name: 'he',
      minRange: 0,
      aimRange: 750,
      maxRange: 750,
      speed: 777,
      gravity: 9.81,
      damageToArmor: 180,
      damageToHuman: 1800,
      spreading: {
        radiusTable: {
          nearest: 1.375,
          farthest: 5.122,
          factor: 4.0,
        },
        burstRecoveryTime: 1.25,
        burstAccuracy: 100,
        spreadPower: 1.55,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
