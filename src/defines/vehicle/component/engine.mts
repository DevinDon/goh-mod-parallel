import { i0lines } from '../../../utils/formatter.mjs';
import { setComponent } from './shared.mjs';

export const setEngine = (repair: number) => (
  i0lines(
    setComponent({ type: 'engine', name: 'engine' }),
    setComponent({ type: 'engine', name: 'engine1' }),
    setComponent({ type: 'engine', name: 'engine2' }),
    setComponent({ type: 'engine', name: 'engine3' }),
    setComponent({ type: 'engine', name: 'engine4' }),
    setComponent({ type: 'engine', name: 'engine5' }),
    '{component "engine"',
    `  {RepairTime ${repair}}`,
    '  {RepairOrder 3}',
    '}',
  )
);
