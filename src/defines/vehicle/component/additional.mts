import { i0lines } from '../../../utils/formatter.mjs';

export type AdditionalOptions = {
  woods?: string[];
  woodShields?: number[];
  holes?: number[];
  glasss?: string[];
  lamps?: string[];
  sandbags?: number[];
};

export const setWood = (name: string) => (
  i0lines(
    `{volume "${name}"`,
    '  {material "wood"}',
    '  {tags "wood"}',
    '}',
  )
);

export const setWoodShield = (index: number) => (
  i0lines(
    `{volume "shieldw${index === 0 ? '' : index}"`,
    '  {material "wood"}',
    '  {tags "wood"}',
    '}',
  )
);

export const setHole = (index: number) => (
  i0lines(
    `{volume "hole${index === 0 ? '' : index}"`,
    '  {able clear {hole}}',
    '}',
  )
);

export const setGlass = (name: string) => (
  i0lines(
    `{volume "${name}"`,
    '  {thickness 0.1}',
    '  {material "glass"}',
    '  {tags "glass"}',
    `  {component "${name}"}`,
    '  {able {visible 0} {obstacle 0} {window}}',
    '}',
    `{component "${name}"`,
    '  {tags "glass"}',
    '  {RepairOrder 13}',
    '}',
  )
);

export const setLamp = (name: string) => (
  i0lines(
    `{volume "${name}"`,
    '  {thickness 0.1}',
    '  {material "glass"}',
    '  {tags "lamp"}',
    `  {component "${name}"}`,
    '  {able {visible 0} {obstacle 0}}',
    '}',
    `{component "${name}"`,
    '  {tags "lamp"}',
    '  {RepairOrder 13}',
    '}',
  )
);

export const setSandbag = (index: number) => (
  i0lines(
    `{volume "sandbag${index === 0 ? '' : index}"`,
    '  {thickness 10}',
    '  {material "sand"}',
    '  {able {NoWoundDecal}}',
    '}',
  )
);

export const setTagOfArmor = (name: string) => (
  i0lines(
    `{volume "${name}"`,
    '  {tags "armor"}',
    '}',
  )
);
