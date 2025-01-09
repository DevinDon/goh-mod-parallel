import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { i0lines } from '../../../utils/formatter.mjs';
import { type WeaponOptions } from '../../options.mjs';
import { default as ger150mmPanzerwerfer } from '../ger/ger-150mm-panzerwerfer.mjs';

const options: WeaponOptions = {

  ...ger150mmPanzerwerfer,

  destination: `${ProjectModConfigDir}/49-inf/resource/set/stuff/standard/rocket-launcher/inf-150mm-panzerwerfer-x10.weapon`,

  name: 'inf-150mm-panzerwerfer-x10',
  description: '德国 15cm 十联装火箭发射器，适用于 42 型火箭发射车',

  amout: ger150mmPanzerwerfer.amout * 10,

  rechargeTime: 120,
  recoveryTime: 0.1,

  bullets: [
    {
      name: 'he',
      minRange: 25,
      maxRange: 2500,
      speed: 340,
      gravity: 5,
      damageToArmor: 1000,
      damageToHuman: 10000,
      spreading: {
        radiusTable: {
          nearest: 15.512,
          farthest: 50.345,
        },
        burstRecoveryTime: 5.50,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 1.75,
      },
    },
  ],

  extra: [
    i0lines(
      '{Burst',
      '  {min 10}',
      '  {noaiming}',
      '}',
    ),
  ],

};

export default options;
