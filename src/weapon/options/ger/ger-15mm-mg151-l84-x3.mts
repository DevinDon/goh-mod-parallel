import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';
import { default as mg151l84Options } from './ger-15mm-mg151-l84.mjs';

const options: WeaponOptions = {

  ...mg151l84Options,

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-15mm-mg151-l84.weapon`,

  name: 'ger-15mm-mg151-l84',
  description: '德国 1.5cm MG 151 L/55 机炮',

  mass: mg151l84Options.mass! * 3,

  amout: mg151l84Options.amout * 3,

  rechargeTime: 20,
  recoveryTime: mg151l84Options.recoveryTime / 3,

  burst: {
    'short': {
      standard: 12,
      random: 2,
    },
    'long': {
      standard: 25,
      random: 5,
    },
    rangeKoef: 0.45,
  },

};

export default options;
