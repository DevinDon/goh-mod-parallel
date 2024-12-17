import { i0lines, i2lines } from '../../../utils/formatter.mjs';
import { setGlass, setHole, setLamp, setSandbag, setWood, setWoodShield, type AdditionalOptions } from '../component/additional.mjs';
import { setCannonDurability, type SetCannonDurabilityOptions } from '../component/durability/cannon.mjs';
import { setCarDurability, type SetCarDurabilityOptions } from '../component/durability/car.mjs';
import { setMotoDurability, type SetMotoDurabilityOptions } from '../component/durability/moto.mjs';
import { setTankDurability, type SetTankDurabilityOptions } from '../component/durability/tank.mjs';
import { setInternalComponent, type SetInternalComponentOptions } from '../component/internal.mjs';
import { setBasicArmor } from '../component/part/armor.mjs';
import { setBody } from '../component/part/body.mjs';
import { setEngine } from '../component/part/engine.mjs';
import { setGun } from '../component/part/gun.mjs';
import { setMantlet } from '../component/part/mantlet.mjs';
import { type PartOptions } from '../component/part/presets.mjs';
import { setTrack } from '../component/part/track.mjs';
import { setTurret } from '../component/part/turret.mjs';
import { setCoverShield, setGunShield, setShield, type SetCoverShieldOptions, type SetGunShieldOptions, type SetShieldOptions } from '../component/shield.mjs';

export type ArmorOptions = {
  /** 耐久 */
  durability: (
    SetCarDurabilityOptions
      | SetTankDurabilityOptions
      | SetMotoDurabilityOptions
      | SetCannonDurabilityOptions
  );
  /** 各部分组件设置，维修时间以及装甲厚度等 */
  parts: PartOptions;
  /** 挡板 */
  shields: (SetShieldOptions | SetGunShieldOptions | SetCoverShieldOptions)[];
  /** 内部组件 */
  internals: SetInternalComponentOptions[];
  /** 外部装饰 */
  additional?: AdditionalOptions;
  /** 外部装甲 */
  volumes: {
    /** 装甲名称 */
    name: string;
    /** 装甲厚度 */
    thickness: {
      /** 基甲厚度 */
      base: number;
      /** 前装甲厚度 */
      front?: number;
      /** 上装甲厚度 */
      top?: number;
      /** 后装甲厚度 */
      rear?: number;
      /** 下装甲厚度 */
      bottom?: number;
    };
    /** 装甲组件 */
    component?: string;
    /** 装甲标签 */
    tags?: string[];
    /** 装甲硬度，即参数 CastSteel，默认为 1 */
    hardness?: number;
    /** 特殊属性 */
    able?: {
      /** 机枪孔等类似孔洞？不确定 */
      holed: boolean;
    };
  }[];
};

export const generateArmor = (options: ArmorOptions) => {

  const { durability, parts, shields, internals, additional, volumes } = options;

  const durabilityLines = durability.$options === 'tank'
    ? setTankDurability(durability)
    : durability.$options === 'car'
      ? setCarDurability(durability)
      : durability.$options === 'moto'
        ? setMotoDurability(durability)
        : durability.$options === 'cannon'
          ? setCannonDurability(durability)
          : `; 未知的耐久类型 ${JSON.stringify(durability)}`;

  const partLines = [
    setTurret(parts.turret),
    setMantlet(parts.mantlet),
    setGun(parts.gun),
    setBody(parts.body),
    setEngine(parts.engine),
    setTrack(parts.track),
    setBasicArmor(parts.armor),
  ];

  const shieldLines = shields.map(
    shield => (
      shield.$options === 'gun-shield'
        ? setGunShield(shield)
        : shield.$options === 'cover-shield'
          ? setCoverShield()
          : shield.$options === 'shield'
            ? setShield(shield)
            : `; 未知的挡板类型 ${JSON.stringify(shield)}`
    ),
  );

  const internalLines = internals.map(
    internal => setInternalComponent(internal),
  );

  const additionalLines = [
    additional?.woods?.map(setWood),
    additional?.woodShields?.map(setWoodShield),
    additional?.holes?.map(setHole),
    additional?.glasss?.map(setGlass),
    additional?.lamps?.map(setLamp),
    additional?.sandbags?.map(setSandbag),
  ]
    .flat()
    .filter((line): line is string => line !== undefined && line !== '');

  const volumeLines = volumes.map(
    volume => {
      const frontLine = volume.thickness.front ? `{front ${volume.thickness.front}}` : '';
      const topLine = volume.thickness.top ? `{top ${volume.thickness.top}}` : '';
      const rearLine = volume.thickness.rear ? `{rear ${volume.thickness.rear}}` : '';
      const bottomLine = volume.thickness.bottom ? `{bottom ${volume.thickness.bottom}}` : '';
      const thicknessList = [ frontLine, topLine, rearLine, bottomLine ].filter(line => line !== '');
      const thicknessLines = thicknessList.length
        ? i0lines(
          `{thickness ${volume.thickness.base}`,
          `  ${i2lines(...thicknessList)}`,
          '}',
        )
        : `{thickness ${volume.thickness.base}}`;
      const componentLine = volume.component ? `{component "${volume.component}"}` : '';
      const tagsLine = volume.tags?.length ? `{tags ${volume.tags.map(tag => `"${tag}"`).join(' ')}}` : '';
      const ableLine = volume.able?.holed ? '{able {holed}}' : '';
      const lines = [
        `{volume "${volume.name}"`,
        `  ${i2lines(thicknessLines)}`,
        `  {CastSteel ${volume.hardness ?? 1}}`,
        `  ${ableLine}`,
        `  ${componentLine}`,
        `  ${tagsLine}`,
        '}',
      ].filter(line => line.trim() !== '');
      return i0lines(...lines);
    },
  );

  return i0lines(
    '; 耐久',
    durabilityLines,
    '',
    '; 各部分组件设置，维修时间以及装甲厚度等',
    ...partLines,
    '',
    '; 挡板',
    ...shieldLines,
    '',
    '; 内部组件',
    ...internalLines,
    '',
    '; 外部装饰',
    ...additionalLines,
    '',
    '; 外部装甲',
    ...volumeLines,
  );

};
