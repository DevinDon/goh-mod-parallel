import { i0unlines, i4lines } from '../../../utils/formatter.mjs';

/** 物品类型 + 数量，如 `{Item "ammo inf-15mm-chain ap" 600}` */
export type InventoryItemAmount = {
  /** 物品名称 */
  name: string;
  /** 物品数量 */
  amount: number;
};

/**
 * 武器 + 挂载点
 *
 * 如 `{Item "weapon inf-infantry-heavy-machine-gun" filling "ammo inf-15mm-chain ap" 120 {user "mgun"}}`
 *
 * 同时也会生成 `{Weapon "${user}" {mask "mountable"}}`
 */
export type InventoryItemWeapon = {
  /** 武器名称 */
  name: string;
  /** 装填内容 */
  filling: string;
  /** 装填数量 */
  amount: number;
  /** 挂载点 */
  user: string;
};

/** 物品 */
export type InventoryItem = InventoryItemAmount | InventoryItemWeapon;

/** 存储空间 */
export type InventoryOptions = {
  /** 存储空间大小，默认宽 12 x 高 10 */
  size?: { width: number; height: number };
  /** 每个格子能够承载的最大重量，默认 1000 */
  weight?: number;
  /** 物品列表，默认为空 */
  items?: InventoryItem[];
};

/** 生成载具装备 */
export const generateInventory = (options: InventoryOptions) => {

  const { size = { width: 12, height: 10 }, weight = 1000, items = [] } = options;

  const mountable = items.find(item => 'user' in item) as InventoryItemWeapon | undefined;

  const weaponLine = mountable
    ? `{Weapon "${mountable.user}" {mask "mountable"}}`
    : '';
  const itemLines = items.map(
    item => {
      if ('user' in item) {
        return `{Weapon "${item.name}" filling "${item.filling}" ${item.amount} {user "${item.user}"}}`;
      }
      return `{Item "${item.name}" ${item.amount}}`;
    },
  );

  return i0unlines(
    '{Extender "inventory"',
    `  ${weaponLine}`,
    '  {Box',
    `    {Size ${size.width} ${size.height}}`,
    `    {Weight ${weight}}`,
    `    ${i4lines(...itemLines)}`,
    '  }',
    '}',
  );

};
