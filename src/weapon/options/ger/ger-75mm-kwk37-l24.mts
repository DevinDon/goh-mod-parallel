import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';
import { default as ger75mmK51L24 } from './ger-75mm-k51-l24.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-75mm-kwk37-l24.weapon`,

  name: 'ger-75mm-kwk37-l24',
  description: '德国 7.5cm KwK 37 L/24 坦克炮，适用于三号 N 型 / Sd.Kfz 234/3 轮式装甲车',

  type: 'gun',

  fireSound: 'cannon/s3/d1/Shared/Cannon_75to76mm_LV/',
  fireSoundClose: 'cannon/s2/1p/Shared/',
  reloadSound: 'tank/1p/medium/',
  cursor: 'ironsights/tank2',

  ammo: 'ger-75l24',
  amout: 1,
  caliber: 75,
  syncedProjectiles: true,

  aimingTolerance: 0.5,
  spreadTolerance: 0.8,

  rechargeTime: 4,
  recoveryTime: 1,

  automatic: false,

  bullets: [
    ...ger75mmK51L24.bullets,
  ],

};

export default options;
