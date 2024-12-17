import { JSON } from '@pipers/toolbox/universal/json';
import { i0lines, i2lines } from '../../utils/formatter.mjs';
import { setMobilityOfArmoredCar, type ArmoredCarMobilityOptions } from '../mobility/armored-car.mjs';
import { setMobilityOfCannon, type CannonMobilityOptions } from '../mobility/cannon.mjs';
import { setMobilityOfCar, type CarMobilityOptions } from '../mobility/car.mjs';
import { setMobilityOfMoto, type MotoMobilityOptions } from '../mobility/moto.mjs';
import { setMobilityOfTank, type TankMobilityOptions } from '../mobility/tank.mjs';
import { setTraceOfCar, type CarTraceOptions } from '../trace/car.mjs';
import { setTraceOfTank, type TankTraceOptions } from '../trace/tank.mjs';

/** 载具机动性配置 */
export type MobilityOptions = {
  /** 载具轨迹配置 */
  traces: (TankTraceOptions | CarTraceOptions)[];
  /** 载具机动性配置 */
  mobility: (
    CannonMobilityOptions
    | MotoMobilityOptions
    | CarMobilityOptions
    | ArmoredCarMobilityOptions
    | TankMobilityOptions
  );
  /** 是否在射击时禁用移动 */
  disableMoveWhileFiring?: boolean;
};

/** 生成载具机动性配置 */
export const generateMobility = (options: MobilityOptions) => {

  const { traces, mobility, disableMoveWhileFiring } = options;

  const traceLines = traces.map(
    trace => (
      trace.$options === 'tank-trace'
        ? setTraceOfTank(trace)
        : setTraceOfCar(trace)
    ),
  );

  const mobilityLines = mobility.$options === 'tank-mobility'
    ? setMobilityOfTank(mobility)
    : mobility.$options === 'car-mobility'
      ? setMobilityOfCar(mobility)
      : mobility.$options === 'moto-mobility'
        ? setMobilityOfMoto(mobility)
        : mobility.$options === 'armored-car-mobility'
          ? setMobilityOfArmoredCar(mobility)
          : mobility.$options === 'cannon-mobility'
            ? setMobilityOfCannon(mobility)
            : `; 未知的配置项: ${JSON.stringify(mobility)}`;

  return i0lines(
    `{Mass ${mobility.mass}}`,
    `{Chassis "${mobility.$options === 'tank-mobility' ? 'track' : 'wheel'}"`,
    `  ${i2lines(...traceLines)}`,
    `  ${i2lines(mobilityLines)}`,
    '}',
    disableMoveWhileFiring === true ? '{DisableMoveWhileFiring}' : '; 在射击时可以移动',
  );

};
