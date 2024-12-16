import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';
import { default as usaBrowningM2 } from './usa-browning-m2.mjs';

const options: WeaponOptions = {

  ...usaBrowningM2,

  destination: `${ProjectModConfigDir}/39-usa/resource/set/stuff/standard/machine-gun/usa-browning-m2-x4.weapon`,

  name: 'usa-browning-m2-x4',
  description: '美国四联 Browning M2 重机枪',

  mass: usaBrowningM2.mass! * 4,

  amout: usaBrowningM2.amout * 4,

  rechargeTime: 33,
  recoveryTime: usaBrowningM2.recoveryTime / 4,

  burst: {
    'short': {
      standard: 20,
      random: 5,
    },
    'long': {
      standard: 30,
      random: 7,
    },
    rangeKoef: 0.5,
  },

};

export default options;
