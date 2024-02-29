/** 视角配置 */
export type VisorOptions = {
  /** 视角名称 */
  name: string;
  /** 视角绑定点 */
  bone: string;
  /** 视角预设参数 */
  preset: 'standard-vision-narrow'
  | 'standard-vision-medium'
  | 'standard-vision-wide'
  | 'standard-vision-around'
  | 'standard-vision-noise-detection'
  | 'standard-vision-none';
};

/** 动画配置 */
export type AnimationOptions = {
  /** 动画名称 */
  name: string;
  /** 正向动画配置 */
  forward: {
    /** 动画基准，可选 */
    base?: {
      /** 动画基准名称 */
      name: string;
      /** 动画基准方向 */
      direction: 'forward' | 'backward';
    };
    /** 起始动画 */
    begin: {
      /** 起始动画名称 */
      name: string;
      /** 起始动画方向 */
      direction: 'forward' | 'backward';
    };
    /** 结束动画 */
    end: {
      /** 结束动画名称 */
      name: string;
      /** 结束动画方向 */
      direction: 'forward' | 'backward';
    };
  };
  /** 反向动画配置 */
  backward: {
    /** 动画基准，可选 */
    base?: {
      /** 动画基准名称 */
      name: string;
      /** 动画基准方向 */
      direction: 'forward' | 'backward';
    };
    /** 结束动画 */
    end: {
      /** 结束动画名称 */
      name: string;
      /** 结束动画方向 */
      direction: 'forward' | 'backward';
    };
  };
};

/** 乘员配置 */
export type CrewOptions = {
  /** 乘员位置名称 */
  name: string;
  /** 乘员出入动画 */
  animation: string;
  /** 乘员出入舱口 */
  door: string;
  /** 乘员绑定点 */
  bone: string;
  /** 乘员视角，默认为 `none` */
  visor?: string;
  /** 禁用的特性 */
  turnoff?: string[];
};

/** 乘客配置 */
export type PassengerOptions = {
  /** 乘客位置名称 */
  name: string;
  /** 乘客出入动画 */
  animation: string;
  /** 乘客出入舱口 */
  door: string;
  /** 乘客绑定点 */
  bone: string;
  /** 禁用的特性 */
  turnoff?: string[];
};

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

};
