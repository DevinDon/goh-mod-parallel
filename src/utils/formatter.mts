/** 如果数字是小数则保留两位小数，否则返回整数 */
export const toFixed = (value: number) => (Number.isInteger(value) ? value.toFixed(0) : value.toFixed(2));

/** 仅合并多行，不设置缩进 */
export const i0lines = (...lines: string[]) => lines.join('\n');

/** 仅合并多行，不设置缩进，删除空行 */
export const i0unlines = (...lines: string[]) => lines
  .flatMap(line => line.split('\n'))
  .filter(line => line.trim() !== '')
  .join('\n');

/** 合并多行，设置两个空格缩进，首行除外 */
export const i2lines = (...lines: string[]) => {
  const [ first, ...rest ] = lines.flatMap(line => line.split('\n'));
  return rest.length > 0
    ? i0lines(first, ...rest.map(line => `  ${line}`.trimEnd()))
    : first;
};

/** 合并多行，设置两个空格缩进，首行除外，删除空行 */
export const i2unlines = (...lines: string[]) => {
  const [ first, ...rest ] = lines.flatMap(line => line.split('\n')).filter(line => line.trim() !== '');
  return rest.length > 0
    ? i0lines(first, ...rest.map(line => `  ${line}`.trimEnd()))
    : first;
};

/** 合并多行，设置四个空格缩进，首行除外 */
export const i4lines = (...lines: string[]) => {
  const [ first, ...rest ] = lines.flatMap(line => line.split('\n'));
  return rest.length > 0
    ? i0lines(first, ...rest.map(line => `    ${line}`.trimEnd()))
    : first;
};

/** 合并多行，设置四个空格缩进，首行除外，删除空行 */
export const i4unlines = (...lines: string[]) => {
  const [ first, ...rest ] = lines.flatMap(line => line.split('\n')).filter(line => line.trim() !== '');
  return rest.length > 0
    ? i0lines(first, ...rest.map(line => `    ${line}`.trimEnd()))
    : first;
};
