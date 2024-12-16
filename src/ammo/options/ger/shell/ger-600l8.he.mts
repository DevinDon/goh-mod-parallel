import { type AmmoOptions } from '../../../options.mjs';

/**
 * 600mm 卡尔臼炮弹药
 *
 * - 弹药类型 / 装药质量 / 炮弹质量 / 初速
 * - 穿甲弹 / 280 kg / 1700 kg / 179 m/s
 * - 重型穿甲弹 / 348 kg / 2180 kg / 179 m/s
 * - 高爆弹 / 460 kg / 1250 kg / 192 m/s
 *
 * <https://zh.wikipedia.org/zh-cn/%E5%8D%A1%E7%88%BE%E8%87%BC%E7%82%AE>
 */
const options: AmmoOptions = {
  destination: 'mods/19-germany/resource/set/stuff/standard/ammo/shell/ger-600l8.he.ammo',
  type: 'he',
  tags: [ 'shell', 'size7', '150to152', 'arty' ],
  entity: '600mm_ger_he',
  mass: 1250,
  fill: 460,
  caliber: 600,
  speed: 192,
  view: {
    name: '600mm_ger_he',
    tail: 'shell_tracer_600',
  },
  inventory: {
    limit: 1,
    size: { width: 12, height: 4 },
  },
  extra: [],
};

export default options;
