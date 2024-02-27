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

export type OvermatchTables = Record<string, OvermatchCalibreTable | OvermatchFixedTable | OvermatchSlopeTable>;
