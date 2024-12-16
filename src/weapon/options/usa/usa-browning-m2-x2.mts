import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';
import { default as usaBrowningM2 } from './usa-browning-m2.mjs';

const options: WeaponOptions = {

  ...usaBrowningM2,

  destination: `${ProjectModConfigDir}/39-usa/resource/set/stuff/standard/machine-gun/usa-browning-m2-x2.weapon`,

  name: 'usa-browning-m2-x2',
  description: '美国双联 Browning M2 重机枪',

  mass: usaBrowningM2.mass! * 2,

  amout: usaBrowningM2.amout * 2,

  rechargeTime: 18,
  recoveryTime: usaBrowningM2.recoveryTime / 2,

  burst: {
    'short': {
      standard: 15,
      random: 3,
    },
    'long': {
      standard: 15,
      random: 5,
    },
    rangeKoef: 0.5,
  },

};

export default options;
