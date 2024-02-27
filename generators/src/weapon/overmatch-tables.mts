import { logger } from '@pipers/logger';

/** OvermatchCalibre 修正表 */
export type OvermatchCalibreTable = {
  type: 'OvermatchCalibre';
  lines: [number, number, number][];
};

/** OvermatchFixed 修正表 */
export type OvermatchFixedTable = {
  type: 'OvermatchFixed';
  lines: [number, number ][];
};

/** OvermatchSlope 修正表 */
export type OvermatchSlopeTable = {
  type: 'OvermatchSlope';
  lines: [number, number ][];
};

/** 生成修正表 */
export const generateOvermatchTable = (name: string) => {
  const table = OvermatchTables[name];
  if (!table) {
    logger.warn(`未找到 ${name} 修正表`);
    return null;
  }
  const lines = table.lines
    .map(
      line => {
        const [ range, ...values ] = line;
        return { range, values };
      },
    )
    .map(
      ({ range, values }) => `  {${range.toString().padEnd(2)} ${values.map(value => value.toFixed(4).slice(0, 6)).join(' ')}}`,
    );
  return [
    `{${table.type}`,
    ...lines,
    '}',
  ].join('\n    ');
};

/** 倾斜入射修正表 */
export const OvermatchTables: Record<string, OvermatchCalibreTable | OvermatchFixedTable | OvermatchSlopeTable> = {
  'ger-20mm-ap': {
    type: 'OvermatchCalibre',
    lines: [
      [ 0, 1.0000, 0.0000 ],
      [ 20, 1.3810, 0.1500 ],
      [ 30, 1.6570, 0.2900 ],
      [ 40, 1.9500, 0.2950 ],
      [ 50, 2.9200, 0.3900 ],
      [ 60, 3.9650, 0.3250 ],
      [ 65, 5.4700, 0.4600 ],
      [ 70, 7.5800, 0.4600 ],
      [ 75, 11.520, 0.4600 ],
      [ 80, 20.850, 0.4600 ],
      [ 85, 57.400, 0.4600 ],
      [ 90, 99.000, 0.0000 ],
    ],
  },
  'ger-20mm-apcr': {
    type: 'OvermatchFixed',
    lines: [
      [ 0, 1.0000 ],
      [ 5, 1.0100 ],
      [ 10, 1.0300 ],
      [ 15, 1.0700 ],
      [ 20, 1.1300 ],
      [ 25, 1.2300 ],
      [ 30, 1.3600 ],
      [ 35, 1.5900 ],
      [ 40, 1.9000 ],
      [ 45, 2.2800 ],
      [ 50, 2.7800 ],
      [ 55, 3.4100 ],
      [ 60, 4.2300 ],
      [ 65, 5.2900 ],
      [ 70, 6.6900 ],
      [ 75, 8.5200 ],
      [ 80, 10.930 ],
      [ 85, 14.150 ],
      [ 90, 99.000 ],
    ],
  },
};
