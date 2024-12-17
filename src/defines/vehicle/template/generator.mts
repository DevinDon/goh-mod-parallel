import { i0lines } from '../../../utils/formatter.mjs';
import { setWoodShield, setHole, setSandbag, setTagOfArmor } from '../component/additional.mjs';

/** 载具类型 */
export type VehicleType = (typeof VehicleType)[number];
export const VehicleType = [ 'light-tank', 'medium-tank', 'heavy-tank', 'tank-assaultgun', 'armored-car', 'cannon', 'car', 'moto' ] as const;

/** 载具模板 */
export type TemplateOptions = {
  /** 载具类型 */
  type: VehicleType;
};

/** 生成载具模板 */
export const generateTemplate = (options: TemplateOptions) => {

  const { type } = options;

  const patherID: string = type === 'light-tank'
    ? 'tank'
    : type === 'medium-tank'
      ? 'tank'
      : type === 'heavy-tank'
        ? 'tank'
        : type === 'tank-assaultgun'
          ? 'tank'
          : type === 'armored-car'
            ? 'armored'
            : type === 'cannon'
              ? 'cannon.small'
              : type === 'car'
                ? 'vehicle.large'
                : type === 'moto'
                  ? 'vehicle.large'
                  : '';

  const props: string[] = [ 'light-tank', 'medium-tank', 'heavy-tank' ].includes(type)
    ? [ 'tank', 'hatch', 'engine', 'with_gun', 'turret', 'detect_tank_medium' ]
    : type === 'tank-assaultgun'
      ? [ 'tank', 'hatch', 'engine', 'with_gun', 'detect_tank_medium' ]
      : type === 'armored-car'
        ? [ 'armored_car', 'engine', 'hatch', 'detect_tank_light' ]
        : type === 'cannon'
          ? [ 'with_gun', 'cannon' ]
          : type === 'car'
            ? [ 'car', 'engine', 'wheeled', 'turn_over' ]
            : type === 'moto'
              ? [ 'moto', 'engine', 'wheeled', 'vision_lev01', 'explosion_throw_crew', 'turn_over', 'no_recrew_logic' ]
              : [];

  const targetClass: string[] = type === 'light-tank'
    ? [ 'tank_light', 'ap fg bullet' ]
    : type === 'medium-tank'
      ? [ 'tank_medium', 'ap fg bullet' ]
      : type === 'heavy-tank'
        ? [ 'tank_heavy', 'ap fg bullet' ]
        : type === 'tank-assaultgun'
          ? [ 'tank_medium', 'ap fg bullet' ]
          : type === 'armored-car'
            ? [ 'armoredcar', 'bullet' ]
            : type === 'cannon'
              ? [ 'cannon_small', 'ap fg bullet' ]
              : type === 'car'
                ? [ 'car', 'bullet' ]
                : type === 'moto'
                  ? [ 'moto', 'bullet' ]
                  : [];

  const targetSelector: string = type === 'light-tank'
    ? 'tank_light'
    : type === 'medium-tank'
      ? 'tank_medium'
      : type === 'heavy-tank'
        ? 'tank_heavy'
        : type === 'tank-assaultgun'
          ? 'tank_medium'
          : type === 'armored-car'
            ? 'tank_zenite'
            : type === 'cannon'
              ? 'cannon_small'
              : type === 'car'
                ? 'car_bullet'
                : type === 'moto'
                  ? 'car_bullet'
                  : '';

  const collider: string = type === 'light-tank'
    ? 'tank.light'
    : type === 'medium-tank'
      ? 'tank.medium'
      : type === 'heavy-tank'
        ? 'tank.heavy'
        : type === 'tank-assaultgun'
          ? 'tank.medium'
          : type === 'armored-car'
            ? 'armored'
            : type === 'cannon'
              ? 'cannon'
              : type === 'car'
                ? 'car'
                : type === 'moto'
                  ? 'moto'
                  : '';

  return i0lines(
    `; standard ${type} options`,
    'actor',
    '',
    `{PatherID "${patherID}"}`,
    `{props "steel" "vehicle" "obstacle_ignore_height" "emit_on_sink" ${props.map(prop => `"${prop}"`).join(' ')}}`,
    '{able "emit_passangers_on_enemy" "repaired" "minimap" "ally_crew" "talk"}',
    `{targetClass ${targetClass.map(target => `"${target}"`).join(' ')}}`,
    `{targetSelector "${targetSelector}"}`,
    '{obstacleID "tank"}',
    '{Simulation {able 1}}',
    '{lodclass "vehicle"}',
    `{collider "${collider}"}`,
    '{NoGroupMesh 1}',
    '',
    '{brain "vehicle"',
    '  {state "vehicle"}',
    '  {const "crush/min_danger_zone_time"   1}',
    '  {const "crush/min_danger_zone_length" 1}',
    '}',
    '',
    '{RimLight}',
    '',
    '{volume "select"',
    '  {able clear {select} {touch}}',
    '  {density 0}',
    '}',
    '{volume "ram"',
    '  {able clear}',
    '  {density 0}',
    '}',
    '{volume "breach" {able {NoWoundDecal}}}',
    '{volume "breech" {able {NoWoundDecal}}}',
    '',
    '{extender "talk"',
    '  {talker "tank"}',
    '}',
    '',
    '{perks {blastwave_modifier 6}}',
    '',
    '{Skeleton',
    '  {Bone "hearing"',
    '    {Position 0 0 40}',
    '  }',
    '  {Bone "radar"',
    '    {Position 0 0 40}',
    '  }',
    '}',
    '{hearingBias 5.0}',
    '{Sensor',
    '  {RecognizeTime 1} ; 单位秒，敌军单位识别时间',
    '  {InformRange 750 750} ; 单位米，向友军单位通告敌军位置的通信距离，第一个参数用于向电脑通告的距离，第二个参数用于向玩家通告的距离',
    '  ; 必备配置',
    '  {Visor "standard-visor-hearing"',
    '    {Bone "hearing"}',
    '    {Vision "standard-vision-noise-detection"}',
    '  }',
    '  {Visor "standard-visor-radar"',
    '    {Bone "radar"}',
    '    {Vision "standard-vision-none"}',
    '  }',
    '  {Visor "standard-visor-none"',
    '    {Vision "standard-vision-none"}',
    '  }',
    '}',
    '',
    setWoodShield(0),
    setWoodShield(1),
    setWoodShield(2),
    setWoodShield(3),
    setWoodShield(4),
    setWoodShield(5),
    setWoodShield(6),
    '',
    setHole(0),
    setHole(1),
    setHole(2),
    setHole(3),
    setHole(4),
    setHole(5),
    setHole(6),
    setHole(7),
    setHole(8),
    setHole(9),
    setHole(10),
    setHole(11),
    setHole(12),
    setHole(13),
    setHole(14),
    setHole(15),
    setHole(16),
    setHole(17),
    setHole(18),
    setHole(19),
    setHole(20),
    setHole(21),
    setHole(22),
    setHole(23),
    setHole(24),
    setHole(25),
    '',
    setSandbag(0),
    setSandbag(1),
    setSandbag(2),
    setSandbag(3),
    setSandbag(4),
    setSandbag(5),
    '',
    setTagOfArmor('armor_plate'),
    setTagOfArmor('armor_engine'),
    setTagOfArmor('armor_visor1'),
    setTagOfArmor('armor_visor2'),
    setTagOfArmor('armor_visor3'),
    setTagOfArmor('armor'),
    setTagOfArmor('armor1'),
    setTagOfArmor('armorL1'),
    setTagOfArmor('armorR1'),
    setTagOfArmor('armor2'),
    setTagOfArmor('armorL2'),
    setTagOfArmor('armorR2'),
    setTagOfArmor('armor3'),
    setTagOfArmor('armorL3'),
    setTagOfArmor('armorR3'),
    setTagOfArmor('armor4'),
    setTagOfArmor('armor5'),
    setTagOfArmor('armor6'),
    setTagOfArmor('armor7'),
    setTagOfArmor('armor8'),
    setTagOfArmor('armor9'),
    setTagOfArmor('armor10'),
    setTagOfArmor('armor11'),
    setTagOfArmor('armor12'),
    setTagOfArmor('armor13'),
    setTagOfArmor('armor14'),
    setTagOfArmor('armor_mg_port'),
    setTagOfArmor('armor_driver'),
    setTagOfArmor('armor_mantlet'),
    setTagOfArmor('armor_hull'),
    setTagOfArmor('armor_front1'),
    setTagOfArmor('armor_front2'),
    setTagOfArmor('armor_front3'),
    setTagOfArmor('armor_front4'),
  );

};
