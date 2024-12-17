import { i0lines } from '../../../utils/formatter.mjs';
import { setComponent } from './shared.mjs';

export const setMantlet = (repair: number) => (
  i0lines(
    setComponent({ type: 'mantlet', name: 'mantlet' }),
    setComponent({ type: 'mantlet', name: 'mantlet1' }),
    setComponent({ type: 'mantlet', name: 'mantlet2' }),
    setComponent({ type: 'mantlet', name: 'mantlet3' }),
    setComponent({ type: 'mantlet', name: 'mantlet4' }),
    setComponent({ type: 'mantlet', name: 'mantlet5' }),
    '{component "mantlet"',
    `  {RepairTime ${repair}}`,
    '  {RepairOrder 3}',
    '}',
  )
);
