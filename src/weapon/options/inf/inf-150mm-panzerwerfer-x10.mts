import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { i0lines } from '../../../utils/formatter.mjs';
import { type WeaponOptions } from '../../options.mjs';
import { default as ger150mmPanzerwerfer } from '../ger/ger-150mm-panzerwerfer.mjs';

const options: WeaponOptions = {

  ...ger150mmPanzerwerfer,

  destination: `${ProjectModConfigDir}/49-inf/resource/set/stuff/standard/rocket-launcher/inf-150mm-panzerwerfer-x10.weapon`,

  name: 'inf-150mm-panzerwerfer-x10',
  description: '德国 15cm 十联装火箭发射器，适用于 42 型火箭发射车',

  amout: ger150mmPanzerwerfer.amout * 1000000,

  rechargeTime: 120,
  recoveryTime: ger150mmPanzerwerfer.recoveryTime / 10,

  extra: [
    i0lines(
      '{Burst',
      '  {min 1000000}',
      '  {noaiming}',
      '}',
    ),
  ],

};

export default options;
