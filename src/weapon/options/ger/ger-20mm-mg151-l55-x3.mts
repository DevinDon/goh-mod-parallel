import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';
import { default as mg151l55Options } from './ger-20mm-mg151-l55.mjs';

const options: WeaponOptions = {

  ...mg151l55Options,

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/gun/ger-20mm-mg151-l55-x3.weapon`,

  name: 'ger-20mm-mg151-l55-x3',
  description: '德国 三联 2cm MG 151 L/55 机炮',

  mass: mg151l55Options.mass! * 3,

  amout: mg151l55Options.amout * 3,

  rechargeTime: 25,
  recoveryTime: mg151l55Options.recoveryTime / 3,

  burst: {
    'short': {
      standard: 10,
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
