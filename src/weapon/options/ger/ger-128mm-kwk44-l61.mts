import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-128mm-kwk44-l61.weapon`,

  name: 'ger-128mm-kwk44-l61',
  description: '德国 12.8cm KwK 44 L/61 坦克炮',

  type: 'gun',

  fireSound: 'cannon/s4/d1/Shared/Cannon_105to130mm/',
  fireSoundClose: 'cannon/s4/3p/Shared/Cannon_105to130mm/',
  reloadSound: 'tank/1p/large/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-128l61',
  amout: 1,
  caliber: 128,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.8,

  rechargeTime: 18.15,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    {
      name: 'apcbche',
      minRange: 0,
      maxRange: 2800,
      speed: 920,
      gravity: 5,
      projectile: [ 272, 269, 257, 242, 215 ],
      damageToArmor: 490,
      damageToHuman: 4900,
      spreading: {
        radiusTable: {
          nearest: 0.57,
          farthest: 3.322,
        },
        burstRecoveryTime: 1.28,
        burstAccuracy: 100,
        spreadPower: 1.50,
        spreadXYRatio: 0.75,
      },
      overmatch: 'ger-128mm-apcbc',
    },
    {
      name: 'he',
      minRange: 0,
      maxRange: 2800,
      speed: 750,
      gravity: 5,
      damageToArmor: 990,
      damageToHuman: 9900,
      spreading: {
        radiusTable: {
          nearest: 0.769,
          farthest: 4.55,
        },
        burstRecoveryTime: 1.28,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

};

export default options;
