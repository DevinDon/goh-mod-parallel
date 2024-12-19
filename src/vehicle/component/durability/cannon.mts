import { i0lines } from '../../../utils/formatter.mjs';
import { type PresetLevel } from '../shared.mjs';

export const CannonDurabilityPresets: Record<PresetLevel, SetCannonDurabilityOptions> = {

  Level01: {
    $options: 'cannon',
    body: 50,
    gun: 25,
    wheel: 50,
    shield: 50,
    thickness: 5,
  },

  Level02: {
    $options: 'cannon',
    body: 100,
    gun: 50,
    wheel: 70,
    shield: 100,
    thickness: 10,
  },

  Level03: {
    $options: 'cannon',
    body: 150,
    gun: 75,
    wheel: 90,
    shield: 150,
    thickness: 15,
  },

  Level04: {
    $options: 'cannon',
    body: 200,
    gun: 100,
    wheel: 110,
    shield: 200,
    thickness: 20,
  },

  Level05: {
    $options: 'cannon',
    body: 250,
    gun: 125,
    wheel: 130,
    shield: 250,
    thickness: 25,
  },

  Level06: {
    $options: 'cannon',
    body: 300,
    gun: 150,
    wheel: 150,
    shield: 300,
    thickness: 30,
  },

  Level07: {
    $options: 'cannon',
    body: 350,
    gun: 175,
    wheel: 170,
    shield: 350,
    thickness: 35,
  },

  Level08: {
    $options: 'cannon',
    body: 400,
    gun: 200,
    wheel: 190,
    shield: 400,
    thickness: 40,
  },

  Level09: {
    $options: 'cannon',
    body: 450,
    gun: 225,
    wheel: 210,
    shield: 450,
    thickness: 45,
  },

  Level10: {
    $options: 'cannon',
    body: 500,
    gun: 250,
    wheel: 230,
    shield: 500,
    thickness: 50,
  },

};

export type SetCannonDurabilityOptions = {
  /** 载具类型 */
  $options: 'cannon';
  /** 车体耐久 */
  body: number;
  /** 炮管耐久 */
  gun: number;
  /** 轮子耐久 */
  wheel: number;
  /** 挡板耐久 */
  shield: number;
  /** 装甲厚度 */
  thickness: number;
};

/** 设置牵引式火炮耐久 */
export const setCannonDurability = (options: SetCannonDurabilityOptions) => {

  const { body, gun, wheel, shield, thickness } = options;

  return i0lines(
    '{perks',
    '  {component "body"',
    '    {health',
    `      {hp ${body * 10}}`,
    `      {hp_broken ${body * 10}}`,
    '    }',
    '    {armor_damage_modifier 0.1}',
    '  }',
    '  {component "gun"',
    '    {health',
    `      {hp ${gun}}`,
    '    }',
    '    {armor_damage_modifier 0.1}',
    '  }',
    '  {component tag "wheel"',
    '    {health',
    `      {hp ${wheel}}`,
    '    }',
    '    {armor_damage_modifier 0.1}',
    '  }',
    '  {component tag "shield"',
    '    {health',
    `      {hp ${shield}}`,
    '    }',
    '    {armor_damage_modifier 0.1}',
    '  }',
    '}',
    '{volume "body"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body1"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body2"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body3"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body4"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body5"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body6"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body7"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body8"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body9"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body10"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body11"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body12"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body13"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body14"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body15"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body16"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body17"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body18"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body19"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "body20"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "standc"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "standr"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "standl"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "standr1"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "standr2"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "standl1"',
    `  {thickness ${thickness}}`,
    '}',
    '{volume "standl2"',
    `  {thickness ${thickness}}`,
    '}',
  );

};
