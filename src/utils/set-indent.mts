export type SetIndentOptions = {
  /** 缩进数量 */
  indent: number;
  /** 是否缩进首行 */
  indentFirstLine: boolean;
};

/** 设置所有行缩进，默认不缩进首行 */
export const setIndent = (input: string, { indent, indentFirstLine }: SetIndentOptions) => {
  const [ firstLine, ...lines ] = input.split('\n');
  const firstLinePart = indentFirstLine
    ? ' '.repeat(indent) + firstLine
    : firstLine;
  const part = lines
    .map(line => (line === '' ? line : ' '.repeat(indent) + line))
    .join('\n');
  return part
    ? `${firstLinePart}\n${part}`
    : firstLinePart;
};

/** 设置单行缩进 indent */
export const iline = (indent: number, line: string) => `${' '.repeat(indent)}${line}`;

/** 设置两个空格缩进 */
export const i2line = (line: string) => `  ${line}`;

/** 合并多行并保留缩进，再设置整体缩进 */
export const ilines = (indent: number | string, ...lines: string[]) => (
  typeof indent === 'number'
    ? lines
      .map(
        line => line
          .split('\n')
          .map(line => iline(indent, line))
          .join('\n'),
      )
      .join('\n')
    : [ indent, ...lines ].join('\n')
);

/** 仅合并多行，不设置缩进 */
export const i0lines = (...lines: string[]) => lines.join('\n');

/** 合并多行，设置两个空格缩进 */
export const i2lines = (...lines: string[]) => ilines(2, ...lines);
