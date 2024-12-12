export const toFixed = (value: number) => (Number.isInteger(value) ? value.toFixed(0) : value.toFixed(2));
