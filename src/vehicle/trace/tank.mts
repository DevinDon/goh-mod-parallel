import { i0lines } from '../../utils/formatter.mjs';

/** 履带轨迹 */
export type TankTraceOptions = {
  $options: 'tank-trace';
  fx: string;
  step: number;
  length: number;
  boneleft: string;
  boneright: string;
};

/** 设置履带轨迹 */
export const setTraceOfTank = (options: TankTraceOptions) => {

  const { fx, step, length, boneleft, boneright } = options;

  return i0lines(
    '{Track "left"',
    '  {Tracer',
    `    {View "${fx}"}`,
    `    {Bone "${boneleft}"}`,
    `    {Step ${step}}`,
    '  }',
    '  {TextureScroller',
    '    {Bone "TrackL"}',
    `    {Length ${length}}`,
    '  }',
    '}',
    '{Track "right"',
    '  {Tracer',
    `    {View "${fx}"}`,
    `    {Bone "${boneright}"}`,
    `    {Step ${step}}`,
    '  }',
    '  {TextureScroller',
    '    {Bone "TrackR"}',
    `    {Length ${length}}`,
    '  }',
    '}',
  );

};
