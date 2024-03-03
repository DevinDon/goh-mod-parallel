export type SetIndentOptions = {
  /** 缩进数量 */
  indent: number;
  /** 是否缩进首行 */
  indentFirstLine: boolean;
};

/** 设置缩进 */
export const setIndent = (input: string, { indent, indentFirstLine }: SetIndentOptions) => {
  const [ firstLine, ...lines ] = input.split('\n');
  const firstLinePart = indentFirstLine
    ? ' '.repeat(indent) + firstLine
    : firstLine;
  const part = lines
    .map(line => line === '' ? line : ' '.repeat(indent) + line)
    .join('\n');
  return part
    ? `${firstLinePart}\n${part}`
    : firstLinePart;
};
