import { i0lines } from '../../../utils/formatter.mjs';
import { setComponent } from '../shared.mjs';

/** 设置车体 */
export const setBody = (repair: number) => (
  i0lines(
    setComponent({ type: 'body', name: 'body' }),
    setComponent({ type: 'body', name: 'body1' }),
    setComponent({ type: 'body', name: 'body2' }),
    setComponent({ type: 'body', name: 'body3' }),
    setComponent({ type: 'body', name: 'body4' }),
    setComponent({ type: 'body', name: 'body5' }),
    setComponent({ type: 'body', name: 'body6' }),
    setComponent({ type: 'body', name: 'body7' }),
    setComponent({ type: 'body', name: 'body8' }),
    setComponent({ type: 'body', name: 'body9' }),
    setComponent({ type: 'body', name: 'body10' }),
    setComponent({ type: 'body', name: 'body11' }),
    setComponent({ type: 'body', name: 'body12' }),
    setComponent({ type: 'body', name: 'body13' }),
    setComponent({ type: 'body', name: 'body14' }),
    setComponent({ type: 'body', name: 'body15' }),
    setComponent({ type: 'body', name: 'body16' }),
    setComponent({ type: 'body', name: 'body17' }),
    setComponent({ type: 'body', name: 'body18' }),
    setComponent({ type: 'body', name: 'body19' }),
    setComponent({ type: 'body', name: 'body20' }),
    setComponent({ type: 'body', name: 'standc' }),
    setComponent({ type: 'body', name: 'standl' }),
    setComponent({ type: 'body', name: 'standl1' }),
    setComponent({ type: 'body', name: 'standl2' }),
    setComponent({ type: 'body', name: 'standr' }),
    setComponent({ type: 'body', name: 'standr1' }),
    setComponent({ type: 'body', name: 'standr2' }),
    '{component "body"',
    `  {RepairTime ${repair}}`,
    '  {RepairOrder 0}',
    '}',
  )
);

/** 设置车身后部 */
export const setBodyback = (repair: number) => (
  i0lines(
    setComponent({ type: 'bodyback', name: 'bodyback' }),
    setComponent({ type: 'bodyback', name: 'bodyback1' }),
    setComponent({ type: 'bodyback', name: 'bodyback2' }),
    setComponent({ type: 'bodyback', name: 'bodyback3' }),
    setComponent({ type: 'bodyback', name: 'bodyback4' }),
    setComponent({ type: 'bodyback', name: 'bodyback5' }),
    setComponent({ type: 'bodyback', name: 'bodyback6' }),
    setComponent({ type: 'bodyback', name: 'bodyback7' }),
    setComponent({ type: 'bodyback', name: 'bodyback8' }),
    setComponent({ type: 'bodyback', name: 'bodyback9' }),
    setComponent({ type: 'bodyback', name: 'bodyback10' }),
    setComponent({ type: 'bodyback', name: 'bodyback11' }),
    setComponent({ type: 'bodyback', name: 'bodyback12' }),
    setComponent({ type: 'bodyback', name: 'bodyback13' }),
    setComponent({ type: 'bodyback', name: 'bodyback14' }),
    setComponent({ type: 'bodyback', name: 'bodyback15' }),
    '{component "bodyback"',
    `  {RepairTime ${repair}}`,
    '  {RepairOrder 6}',
    '}',
  )
);
