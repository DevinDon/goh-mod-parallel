import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';
import { default as ger20mmFlak38L112 } from './ger-20mm-flak38-l112.mjs';

const options: WeaponOptions = {

  ...ger20mmFlak38L112,

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-20mm-flak38-l112-x4.weapon`,

  name: 'ger-20mm-flak38-l112-x4',
  description: '德国 2cm FlaK 30 L/112 四联防空炮，适用于旋风自行防空炮',

  amout: ger20mmFlak38L112.amout * 4,

  rechargeTime: 7,
  recoveryTime: ger20mmFlak38L112.recoveryTime / 4,

  burst: {
    'short': {
      standard: 20,
      random: 2,
    },
    'long': {
      standard: 40,
      random: 4,
    },
    rangeKoef: 0.45,
  },

};

export default options;
