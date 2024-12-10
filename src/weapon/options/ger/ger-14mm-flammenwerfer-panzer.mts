import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/flame-thrower/ger-14mm-flammenwerfer-panzer.weapon`,

  name: 'ger-14mm-flammenwerfer-panzer',
  description: '德国 1.4 cm 喷火器 坦克专用',

  from: 'pattern standard-flame-thrower',

  tags: [ 'gun' ],

  entity: '14mm_flammenwerfer_pz3',
  mass: 150,

  fireSound: 'flame/blank_flame',
  fireSoundClose: 'flame/blank_flame',
  reloadSound: 'tank/reload_small',
  cursor: 'ironsights/tank',

  ammo: 'ger-fuel ic',
  amout: 500,
  calibre: 14,
  syncedProjectiles: false,

  aimingTolerance: 3,
  spreadTolerance: 0.1,

  rechargeTime: 2,
  recoveryTime: 60 / 600,

  automatic: true,

  burst: {
    'short': {
      standard: 5,
      random: 1,
    },
    'long': {
      standard: 10,
      random: 2,
    },
    rangeKoef: 0.45,
  },

  bullets: [
    {
      name: 'ic',
      minRange: 0,
      maxRange: 60,
      effectiveRange: 60,
      speed: 40,
      gravity: 0.5,
      damageToArmor: 1,
      damageToHuman: 10,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 3.5 * 2,
          factor: 5.5,
        },
        burstRecoveryTime: 0.1,
        burstAccuracy: 100,
        spreadPower: 1.25,
        spreadXYRatio: 0.75,
      },
    },
  ],

  extra: [
    '{Foresight "foresight1"}',
  ],

};

export default options;
