/** 视角配置 */
export type VisorOptions = {
  /** 视角名称 */
  name: string;
  /** 视角绑定点 */
  bone: string;
  /** 视角预设参数 */
  preset: 'standard-vehicle-vision-narrow'
  | 'standard-vehicle-vision-medium'
  | 'standard-vehicle-vision-wide'
  | 'standard-vehicle-vision-around'
  | 'standard-vision-noise-detection'
  | 'standard-vision-none';
};

/** 动画配置 */
export type AnimationOptions = {
  /** 动画名称 */
  name: string;
  /** 正向动画配置 */
  forward?: {
    /** 动画基准 */
    base?: [string, number];
    /** 起始动画 */
    begin?: [string, number];
    /** 结束动画 */
    end?: [string, number];
  };
  /** 反向动画配置 */
  reverse?: {
    /** 动画基准 */
    base?: [string, number];
    /** 起始动画 */
    begin?: [string, number];
    /** 结束动画 */
    end?: [string, number];
  };
};

/** 乘员配置 */
export type CrewOptions = {
  /** 乘员位置名称 */
  name: string;
  /** 乘员出入舱口及动画 */
  animations: {
    /** 出入舱口 */
    door: string;
    /** 出入动画 */
    animation: string;
  }[];
  /** 乘员绑定点 */
  bone?: string;
  /** 乘员视角 */
  visor?: string;
  /** 禁用的特性 */
  turnoff?: string[];
  /** 额外的自定义参数，需要包含花括号或大括号，一项为一行 */
  extra?: string[];
};

/** 乘客配置 */
export type PassengerOptions = Omit<CrewOptions, 'visor'>;

export type CrewAndPassengerOptions = {

  /** 要保存到的路径，相对于当前模组的根目录 */
  destination: string;

  /** 视角列表 */
  visors: VisorOptions[];
  /** 动画列表 */
  animations: AnimationOptions[];
  /** 乘员列表 */
  crews: CrewOptions[];
  /** 乘客列表 */
  passengers: PassengerOptions[];

  /** 额外的自定义参数，需要包含花括号或大括号，一项为一行 */
  extra?: string[];

};
