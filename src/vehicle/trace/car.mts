import { i0lines } from '../../utils/formatter.mjs';

/** 轮胎轨迹 */
export type CarTraceOptions = {
  $options: 'car-trace';
  fx: string;
  step: number;
  wheelleft: string;
  wheelright: string;
  boneleft: string;
  boneright: string;
};

/** 设置轮胎轨迹 */
export const setTraceOfCar = (options: CarTraceOptions) => {

  const { fx, step, wheelleft, wheelright, boneleft, boneright } = options;

  return i0lines(
    `{Track "${wheelleft}"`,
    '  {Tracer',
    `    {View "${fx}"}`,
    `    {Bone "${boneleft}"}`,
    `    {Step ${step}}`,
    '  }',
    '}',
    `{Track "${wheelright}"`,
    '  {Tracer',
    `    {View "${fx}"}`,
    `    {Bone "${boneright}"}`,
    `    {Step ${step}}`,
    '  }',
    '}',
  );

};
