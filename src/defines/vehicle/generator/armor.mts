import { type ArmorPresets } from '../component/part/armor.mjs';
import { type SetCannonDurabilityOptions } from '../component/durability/cannon.mjs';
import { type SetCarDurabilityOptions } from '../component/durability/car.mjs';
import { type SetMotoDurabilityOptions } from '../component/durability/moto.mjs';
import { type SetTankDurabilityOptions } from '../component/durability/tank.mjs';

export type ArmorOptions = {
  /** 耐久 */
  durability: (
    SetCarDurabilityOptions
      | SetTankDurabilityOptions
      | SetMotoDurabilityOptions
      | SetCannonDurabilityOptions
  );
  /** 基础装甲 */
  armor: keyof typeof ArmorPresets;
  /** 各部分组件设置，维修时间以及装甲厚度等 */
  parts: [];
};
