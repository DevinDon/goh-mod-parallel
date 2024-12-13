/** 炮弹类型 */
export const ShellType = [
  'ap',
  'apbc',
  'apc',
  'apcbc',
  'apcbche',
  'apche',
  'apcr',
  'apds',
  'aphe',
  'aphebc',
  'he',
  'heat',
  'hvap',
  'ic',
  'sap',
  'sm',
  'wp',
] as const;

export type ShellType = typeof ShellType[number];

/** 弹药配置 */
export type AmmoOptions = {

  /** 要保存到的路径，相对于当前模组的根目录 */
  destination: string;

  /** 弹药种类 */
  type: ShellType;
  /** 标签 */
  tags: string[];
  /** 模型 */
  entity: string;
  /** 质量，单位 kg，质量的 0.4 作为弹头质量 */
  mass: number;
  /** 装药，根据不同弹种有不同的默认值设置 */
  fill?: number;
  /** 口径，单位 mm */
  caliber: number;
  /** 弹速，单位 m/s */
  speed: number;
  /** 效果 */
  view: {
    /** 效果名称 */
    name: string;
    /** 尾焰，可选 */
    tail?: string;
  };
  /** 体积，可选，默认根据口径和质量计算生成 */
  inventory?: {
    /** 单个存储格堆叠上限，默认为 `1000 / ((质量 mass 最小为 1 * 宽 * 高) 的平方根)` */
    limit?: number;
    /**
     * 尺寸，宽 x 高
     *
     * 宽默认为 `口径 caliber / 10` 区间 [1, 10]
     *
     * 高默认为 `口径 caliber / 50` 区间 [1, 10]
     */
    size?: { width: number; height: number };
    /** 堆叠数量，默认为 1 */
    block?: number;
  };

  /** 额外的自定义参数，需要包含花括号或大括号，一项为一行 */
  extra?: string[];

};
