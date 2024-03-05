/** 人员背包项 */
export type InventoryItem = string;

/** 人员配置 */
export type HumanOptions = {

  /** 要保存到的路径，相对于当前模组的根目录 */
  destination: string;

  /** 标签，可选 */
  tags?: string[];
  /** 行为类别 */
  behaviour: 'soldier';
  /** 外观 */
  skin: string;
  /** 肖像 */
  portrait: string;
  /** 图标 */
  icon: string;
  /** 图标优先级 */
  iconPriority: number;
  /** 国籍 */
  nationality: 'ger' | 'usa' | 'fin' | 'rus';
  /** 防护装置 */
  armors?: {
    head?: string;
    body?: string;
  };
  /** 能力 */
  perks: string[];
  /** 体力 */
  veterancy: string[];
  /** 背包 */
  inventory: InventoryItem[];

  /** 额外的自定义参数，需要包含花括号或大括号，一项为一行 */
  extra?: string[];

};
