import { i0lines } from '../../../utils/formatter.mjs';
import { type PresetLevel } from '../shared.mjs';

export const MotoDurabilityPresets: Record<PresetLevel, SetMotoDurabilityOptions> = {
  Level01: {
    $options: 'moto',
    body: 25,
    engine: 25,
  },
  Level02: {
    $options: 'moto',
    body: 50,
    engine: 50,
  },
  Level03: {
    $options: 'moto',
    body: 75,
    engine: 75,
  },
  Level04: {
    $options: 'moto',
    body: 100,
    engine: 100,
  },
  Level05: {
    $options: 'moto',
    body: 125,
    engine: 125,
  },
  Level06: {
    $options: 'moto',
    body: 150,
    engine: 150,
  },
  Level07: {
    $options: 'moto',
    body: 175,
    engine: 175,
  },
  Level08: {
    $options: 'moto',
    body: 200,
    engine: 200,
  },
  Level09: {
    $options: 'moto',
    body: 225,
    engine: 225,
  },
  Level10: {
    $options: 'moto',
    body: 250,
    engine: 250,
  },
};

export type SetMotoDurabilityOptions = {
  /** 载具类型 */
  $options: 'moto';
  /** 车体耐久 */
  body: number;
  /** 引擎耐久 */
  engine: number;
};

/** 设置摩托耐久 */
export const setMotoDurability = (options: SetMotoDurabilityOptions) => {

  const { body, engine } = options;

  return i0lines(
    '{perks',
    '  {component "body"',
    '    {health',
    `      {hp ${body}}`,
    `      {hp_broken ${body * 10}}`,
    '    }',
    '    {armor_damage_modifier 2}',
    '  }',
    '  {component "engine"',
    '    {health',
    `      {hp ${engine}}`,
    `      {hp_broken ${engine}}`,
    '    }',
    '    {armor_damage_modifier 3}',
    '  }',
    '  {component tag "wheel"',
    '    {health',
    '      {hp 125}',
    '    }',
    '    {armor_damage_modifier 5}',
    '  }',
    '  {component tag "glass"',
    '    {health',
    '      {hp 60}',
    '      {hp_broken 60}',
    '    }',
    '  }',
    '  {component tag "shield"',
    '    {health',
    '      {hp 100}',
    '      {hp_broken 100}',
    '    }',
    '  }',
    '  {component tag "cut_part"',
    '    {health',
    '      {hp 100}',
    '    }',
    '  }',
    '  {component tag "fuel"',
    '    {health',
    '      {hp 100}',
    '      {hp_broken 100}',
    '    }',
    '    {armor_damage_modifier 3}',
    '  }',
    '  {component tag "ammo"',
    '    {health',
    '      {hp 100}',
    '      {hp_broken 100}',
    '    }',
    '    {armor_damage_modifier 3}',
    '  }',
    '}',
    '{volume "body"',
    `  {thickness ${body}}`,
    '}',
    '{volume "body1"',
    `  {thickness ${body}}`,
    '}',
    '{volume "body2"',
    `  {thickness ${body}}`,
    '}',
    '{volume "body3"',
    `  {thickness ${body}}`,
    '}',
    '{volume "body4"',
    `  {thickness ${body}}`,
    '}',
    '{volume "body5"',
    `  {thickness ${body}}`,
    '}',
    '{volume "body6"',
    `  {thickness ${body}}`,
    '}',
    '{volume "body7"',
    `  {thickness ${body}}`,
    '}',
    '{volume "body8"',
    `  {thickness ${body}}`,
    '}',
    '{volume "body9"',
    `  {thickness ${body}}`,
    '}',
    '{volume "engine"',
    `  {thickness ${engine}}`,
    '}',
    '{volume "engine1"',
    `  {thickness ${engine}}`,
    '}',
    '{volume "engine2"',
    `  {thickness ${engine}}`,
    '}',
    '{volume "fuel"',
    '  {tags "explosive"}',
    '  {thickness 1}',
    '}',
  );
};
