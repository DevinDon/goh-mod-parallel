import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-600mm-karl-l8.weapon`,

  name: 'ger-600mm-karl-l8',
  description: '德国 60cm L/8 卡尔臼炮',

  from: 'pattern standard-gun',

  fireSound: 'gun/gun_203_210',
  fireSoundClose: 'gun/gun_203_210',
  reloadSound: 'tank/reload_howitzer',
  cursor: 'ironsights/tank2',

  ammo: 'ger-600l8',
  amout: 1,
  calibre: 600,
  syncedProjectiles: true,
  curved: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 180,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'he',
      minRange: 100,
      maxRange: 525,
      effectiveRange: 525 / 4,
      speed: 176,
      gravity: 9,
      damageToArmor: 3000,
      damageToHuman: 30000,
      spreading: {
        radiusTable: {
          nearest: 9,
          farthest: 26.6 * 2,
          factor: 4.0,
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
