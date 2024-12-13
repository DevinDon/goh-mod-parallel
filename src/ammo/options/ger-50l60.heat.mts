import { type AmmoOptions } from '../options.mjs';

const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/shell/ger-50l60.heat.ammo',
  type: 'heat',
  tags: [ 'shell', 'size3', 'size3_heat_shell', 'steilgr', 'heat_low' ],
  entity: '50mm_ger_l60_heat',
  mass: 8.6,
  fill: 0.15,
  caliber: 50,
  speed: 0,
  view: {
    name: '50mm_ger_l60_heat',
  },
  inventory: {
    size: { width: 4, height: 1 },
  },
  extra: [],
};

export default options;
