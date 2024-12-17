import { generateCrewAndPassenger } from '../../../crew-and-passenger/generators/generator.mjs';
import { type CrewAndPassengerOptions } from '../../../crew-and-passenger/options.mjs';
import { i0lines, i2lines } from '../../../utils/formatter.mjs';
import { type VehicleType } from '../template/generator.mjs';
import { generateArmor, type ArmorOptions } from './armor.mjs';
import { generateInventory, type InventoryOptions } from './inventory.mjs';
import { generateMobility, type MobilityOptions } from './mobility.mjs';
import { generateWeaponry, type WeaponryOptions } from './weaponry.mjs';

/** @link `resource/set/colliders.set` */
export type Collider = (typeof Collider)[number];
export const Collider = [
  'vehicle',
  'cannon',
  'cannon_small',
  'moto',
  'car',
  'truck',
  'armored',
  'tank.light',
  'tank.medium',
  'tank.heavy',
] as const;

export type VehicleOptions = {
  /** 载具元信息 */
  metadata: {
    /** 载具编号 */
    id: string;
    /** 载具名称 */
    name: string;
    /** 阵营 */
    faction: 'ascension' | 'axis' | 'allies';
    /** 国家 */
    country: 'inf' | 'ger' | 'fin' | 'rus' | 'usa';
    /** 载具类别 */
    category: 'armored-track' | 'armored-wheel' | 'spg' | 'tank' | 'truck';
  };
  /** 载具类型 */
  type: VehicleType;
  /** 选择框样式 */
  selection: {
    type: 'small' | 'normal' | 'large' | 'elongated' | 'cannon';
    scale: number;
  };
  /** 模型文件，后缀名 .mdl */
  extension: string;
  /** 装甲配置 */
  armor: ArmorOptions;
  /** 成员配置 */
  crewsAndPassengers: CrewAndPassengerOptions;
  /** 载具 ID，如 panzer4 */
  patherid: string;
  /** 载具类型，如 */
  collider: Collider;
  /** 目标类型 */
  targetClasses: string[];
  /** 目标选择器 */
  targetSelector: string;
  /** 载具属性 */
  props: string[];
  /** 载具能力 */
  ables: string[];
  /** 细节，当为 random 时，随机选择细节，否则使用提供的细节 */
  details: 'random' | string[];
  /** 迷彩 */
  enumerator?: { digitFolder: string };
  /** 挡板 */
  shield?: { on: boolean };
  /** 烟雾发射器 */
  smokescreen?: { cooldown: number; itemTags: string };
  /** 载具装备 */
  inventory?: InventoryOptions;
  /** 载具武器 */
  weaponry?: WeaponryOptions;
  /** 载具机动性 */
  mobility: MobilityOptions;
};

export const generateVehicle = (options: VehicleOptions) => {

  const {
    metadata,
    type,
    selection,
    extension,
    armor,
    crewsAndPassengers,
    patherid,
    collider,
    targetClasses,
    targetSelector,
    props,
    ables,
    details,
    enumerator,
    shield,
    smokescreen,
    inventory,
    weaponry,
    mobility,
  } = options;

  const selectionLines = selection.type === 'small'
    ? `(include "/properties/selection/vehicle_small.inc" scale(${selection.scale}))`
    : selection.type === 'large'
      ? `(include "/properties/selection/vehicle_big.inc" scale(${selection.scale}))`
      : selection.type === 'elongated'
        ? `(include "/properties/selection/vehicle_elongated.inc" scale(${selection.scale}))`
        : selection.type === 'cannon'
          ? `(include "/properties/selection/cannon.inc" scale(${selection.scale}))`
          : `(include "/properties/selection/vehicle.inc" scale(${selection.scale}))`;

  const armorLines = generateArmor(armor);

  const crewsAndPassengersLines = generateCrewAndPassenger(crewsAndPassengers);

  const detailLines = details === 'random'
    ? i0lines(
      '{Extender "detail"',
      '  {random 1}',
      '}',
    )
    : i0lines(
      '{Extender "detail"',
      '  {random 0}',
      `  ${i2lines(...details.map(detail => `{${detail}}`))}`,
      '}',
    );

  const enumeratorLines = enumerator
    ? i0lines(
      '{Extender "enumerator"',
      `  {digit_folder "${enumerator.digitFolder}"}`,
      '}',
    )
    : '; 无额外 Enumerator';

  const smokescreenLines = smokescreen
    ? i0lines(
      '{Extender "smokescreen"',
      `  {cooldown ${smokescreen.cooldown}}`,
      `  {itemTags "${smokescreen.itemTags}"}`,
      '}',
    )
    : '; 无额外 Smokescreen';

  const inventoryLines = inventory ? generateInventory(inventory) : '; 无额外 Inventory';

  const weaponryLines = weaponry ? generateWeaponry(weaponry) : '; 无额外 Weaponry';

  const mobilityLines = generateMobility(mobility);

  return i0lines(
    '{game_entity',
    '',
    `  ; 载具编号 ${metadata.id}`,
    `  ; 载具名称 ${metadata.name}`,
    `  ; 载具类别 ${metadata.category}`,
    `  ; 载具阵营 ${metadata.faction}`,
    `  ; 载具国家 ${metadata.country}`,
    '',
    `  (include "/properties/standard/vehicle/template/${type}.ext")`,
    `  ${selectionLines}`,
    '',
    `  {Extension "${extension}"}`,
    '',
    `  ${i2lines(armorLines)}`,
    '',
    `  ${i2lines(crewsAndPassengersLines)}`,
    '',
    `  {PatherID "${patherid}"}`,
    `  {Collider "${collider}"}`,
    `  ${targetClasses.length > 0 ? `{TargetClass "${targetClasses.join(' ')}"}` : '; 无额外 TargetClass'}`,
    `  {TargetSelector "${targetSelector}"}`,
    `  ${props.length > 0 ? `{Props "${props.join(' ')}"}` : '; 无额外 Props'}`,
    `  ${ables.length > 0 ? `{able "${ables.join(' ')}"}` : '; 无额外 Ables'}`,
    '',
    `  ${i2lines(detailLines)}`,
    '',
    `  ${i2lines(enumeratorLines)}`,
    '',
    `  ${shield ? '{Extender "shield" {on}}' : '; 无额外 Shield'}`,
    '',
    `  ${i2lines(smokescreenLines)}`,
    '',
    `  ${i2lines(inventoryLines)}`,
    '',
    `  ${i2lines(weaponryLines)}`,
    '',
    `  ${i2lines(mobilityLines)}`,
    '',
    '}',
  );

};
