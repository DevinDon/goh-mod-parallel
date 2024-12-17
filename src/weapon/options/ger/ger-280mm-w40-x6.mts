import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { i0lines } from '../../../utils/formatter.mjs';
import { type WeaponOptions } from '../../options.mjs';
import { default as ger280mmW40 } from './ger-280mm-w40.mjs';

const options: WeaponOptions = {

  ...ger280mmW40,

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/rocket-launcher/ger-280mm-w40-x6.weapon`,

  name: 'ger-280mm-w40-x6',
  description: '德国 28cm Wurfrahmen 40 六联装火箭发射器',

  amout: ger280mmW40.amout * 6,

  rechargeTime: 300,
  recoveryTime: ger280mmW40.recoveryTime / 6,

  extra: [
    i0lines(
      '{Burst',
      '  {min 6}',
      '  {noaiming}',
      '}',
    ),
  ],

};

export default options;
