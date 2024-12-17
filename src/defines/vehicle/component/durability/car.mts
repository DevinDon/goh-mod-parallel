import { i0lines } from '../../../../utils/formatter.mjs';
import { type PresetLevel } from '../shared.mjs';
import { setTankDurability } from './tank.mjs';

export const CarDurabilityPresets: Record<PresetLevel, SetCarDurabilityOptions> = {
  Level01: {
    $options: 'car',
    body: 25,
    engine: 25,
  },
  Level02: {
    $options: 'car',
    body: 50,
    engine: 50,
  },
  Level03: {
    $options: 'car',
    body: 75,
    engine: 75,
  },
  Level04: {
    $options: 'car',
    body: 100,
    engine: 100,
  },
  Level05: {
    $options: 'car',
    body: 125,
    engine: 125,
  },
  Level06: {
    $options: 'car',
    body: 150,
    engine: 150,
  },
  Level07: {
    $options: 'car',
    body: 175,
    engine: 175,
  },
  Level08: {
    $options: 'car',
    body: 200,
    engine: 200,
  },
  Level09: {
    $options: 'car',
    body: 225,
    engine: 225,
  },
  Level10: {
    $options: 'car',
    body: 250,
    engine: 250,
  },
};

export type SetCarDurabilityOptions = {
  /** 载具类型 */
  $options: 'car';
  /** 车体耐久 */
  body: number;
  /** 引擎耐久 */
  engine: number;
};

/** 设置汽车耐久 */
export const setCarDurability = (options: SetCarDurabilityOptions) => {

  const { body, engine } = options;

  return i0lines(
    setTankDurability({ $options: 'tank', body, engine, turret: 100, mantlet: 100, gun: 150, track: 100, armor: 50 }),
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
    '{volume "bodyback1"  ',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback2"  ',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback3"  ',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback4"  ',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback5"  ',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback6"  ',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback7"  ',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback8"  ',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback9"  ',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback10"',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback11"',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback12"',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback13"',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback14"',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback15"',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback16"',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback17"',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback18"',
    `  {thickness ${body}}`,
    '}',
    '{volume "bodyback19"',
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
  );

};
