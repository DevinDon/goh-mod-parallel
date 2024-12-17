import { i0lines } from '../../../../utils/formatter.mjs';
import { setComponent } from '../shared.mjs';

export const setTurret = (repair: number) => (
  i0lines(
    setComponent({ type: 'turret', name: 'turret' }),
    setComponent({ type: 'turret', name: 'turret1' }),
    setComponent({ type: 'turret', name: 'turret2' }),
    setComponent({ type: 'turret', name: 'turret3' }),
    setComponent({ type: 'turret', name: 'turret4' }),
    setComponent({ type: 'turret', name: 'turret5' }),
    '{component "turret"',
    `  {RepairTime ${repair}}`,
    '  {RepairOrder 2}',
    '}',
  )
);
