import { logger } from '@pipers/logger';
import { setIndent } from '../../utils/set-indent.mjs';
import { ger105mmOvermatchTables } from './overmatch-tables/ger-105mm.mjs';
import { ger128mmOvermatchTables } from './overmatch-tables/ger-128mm.mjs';
import { ger20mmOvermatchTables } from './overmatch-tables/ger-20mm.mjs';
import { ger30mmOvermatchTables } from './overmatch-tables/ger-30mm.mjs';
import { ger37mmOvermatchTables } from './overmatch-tables/ger-37mm.mjs';
import { ger50mmOvermatchTables } from './overmatch-tables/ger-50mm.mjs';
import { ger75mmOvermatchTables } from './overmatch-tables/ger-75mm.mjs';
import { ger88mmOvermatchTables } from './overmatch-tables/ger-88mm.mjs';
import { gerRifleOvermatchTables } from './overmatch-tables/ger-rifle.mjs';
import { heatOvermatchTables } from './overmatch-tables/heat.mjs';
import type { OvermatchTables } from './overmatch-tables/type.mjs';
import { usa37mmOvermatchTables } from './overmatch-tables/usa-37mm.mjs';
import { usa75mmOvermatchTables } from './overmatch-tables/usa-75mm.mjs';
import { usa76mmOvermatchTables } from './overmatch-tables/usa-76mm.mjs';
import { usa90mmOvermatchTables } from './overmatch-tables/usa-90mm.mjs';

/** 生成修正表 */
export const generateOvermatchTable = (name: string) => {
  const table = overmatchTables[name];
  if (!table) {
    logger.warn(`未匹配到修正表配置 ${name}`);
    return `; 未匹配到修正表配置 ${name}`;
  }
  const lines = table.lines
    .map(
      line => {
        const [ range, ...values ] = line;
        return { range, values };
      },
    )
    .map(
      ({ range, values }) => `{${range.toString().padEnd(2)} ${values.map(value => value.toFixed(4).slice(0, 6)).join(' ')}}`,
    );
  const parameters = setIndent(
    lines.join('\n'),
    { indent: 2, indentFirstLine: true },
  );
  return `{${table.type}\n${parameters}\n}`;
};

/** 倾斜入射修正表 */
export const overmatchTables: OvermatchTables = {
  ...heatOvermatchTables,
  ...ger20mmOvermatchTables,
  ...ger30mmOvermatchTables,
  ...ger37mmOvermatchTables,
  ...ger50mmOvermatchTables,
  ...ger75mmOvermatchTables,
  ...ger88mmOvermatchTables,
  ...ger105mmOvermatchTables,
  ...ger128mmOvermatchTables,
  ...gerRifleOvermatchTables,
  ...usa37mmOvermatchTables,
  ...usa75mmOvermatchTables,
  ...usa76mmOvermatchTables,
  ...usa90mmOvermatchTables,
};
