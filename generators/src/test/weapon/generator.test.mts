import { it } from 'node:test';
import { generateWeapon } from '../../weapon/generator.mjs';
import options from '../../weapon/options/ger-20mm-flak30-l65.mjs';
import { equal } from 'node:assert';

const output = `; ger-20mm-flak30-l65
; 德国 2cm FlaK 30 L/65 防空炮，适用于欧宝闪电
{from "pattern gun"

  (include "/properties/standard/gun/define.ext")

  {FireSound "gun/gun_auto"} ; 开火音效
  {FireSoundclose "gun/gun_auto"} ; 车内视角开火音效
  {ReloadSound "tank/reload_small"} ; 装弹音效
  {Cursor "ironsights/aa"} ; 鼠标指针

  {Filling "ammo ger-20l55" 20} ; 弹种及弹链内炮弹数量
  {Calibre 20} ; 口径
  {SyncedProjectiles 0} ; 生成弹坑, 0 为禁止, 1 为允许

  {UnlimitedRangeTPC 1} ; 直接操控模式下无视距离开火, 1 为允许, 0 为禁止
  {AimingTolerance 12} ; 当瞄准偏离目标若干度时, 将限制 AI 将开火
  {SpreadTolerance 0.1} ; 瞄准到一定精度就可以开火
  {ZeroingAccuracy 0.95 0.9 0.85 0.8 0.75} ; 归零精度？不确定
  {LockFireDistanceTime 3} ; 超出射击距离后允许继续开火的时间
  {DisableRicochet 0} ; 是否禁用跳弹模式
  ; 不启用曲射模式

  {RechargeTime 2} ; 装填时间（秒）
  {RecoveryTime 0.214} ; 短射间隔（秒）, 适用于弹链

  {Automatic} ; 自动武器

  {Burst
    {Short 20 2} ; 远距离短连发，基数 +- 随机数
    {Long  10 1} ; 近距离长连发，基数 +- 随机数
    {RangeKoef 0.45} ; 该系数乘以 AimRange = 分界距离，大于分界距离为远距离，小于分界距离为近距离
  }

  {Parameters "ap"
    {MinRange 0} ; 最短射击距离 m
    {AimRange 350} ; AI 最长射击距离 m
    {MaxRange 350} ; 玩家最长射击距离 m
    {Speed 760} ; 炮弹速度
    {Gravity 5} ; 炮弹重力
    {ProjectileDamageTable {100 45} {500 11} {1000 0}} ; 穿深表
    {MinimumDamageModifier 30} ; 伤害
    {Spreading
      {RadiusTable {0 0} {100 0.3} {500 1.7} {1000 5.95}} ; 散布
      {BurstRecoveryTime 0.1} ; 开火后恢复到正常精度的时间
      {BurstAccuracy     100} ; 默认值为 100, 连续开火第一发的精度为 100%, 值越低精度越低
      {SpreadPower       1.25} ; 默认值为 1, 大于 1 时炮弹落点会偏向中心, 小于 1 时炮弹落点会远离中心
      {SpreadXYRatio     0.75} ; 默认值为 0.75 炮弹落点的横纵向比例, 小于 1 时更偏向于纵向落点, 大于 1 时更偏向于横向落点
    }
    {OvermatchCalibre
      {0  1.0000 0.0000}
      {20 1.3810 0.1500}
      {30 1.6570 0.2900}
      {40 1.9500 0.2950}
      {50 2.9200 0.3900}
      {60 3.9650 0.3250}
      {65 5.4700 0.4600}
      {70 7.5800 0.4600}
      {75 11.520 0.4600}
      {80 20.850 0.4600}
      {85 57.400 0.4600}
      {90 99.000 0.0000}
    }
    ; 无防空炮配置
  }

  {Parameters "apcr"
    {MinRange 0} ; 最短射击距离 m
    {AimRange 350} ; AI 最长射击距离 m
    {MaxRange 350} ; 玩家最长射击距离 m
    {Speed 1050} ; 炮弹速度
    {Gravity 5} ; 炮弹重力
    {ProjectileDamageTable {100 63} {500 1} {1000 0}} ; 穿深表
    {MinimumDamageModifier 20} ; 伤害
    {Spreading
      {RadiusTable {0 0} {100 0.2} {500 1.5} {1000 4.50}} ; 散布
      {BurstRecoveryTime 0.1} ; 开火后恢复到正常精度的时间
      {BurstAccuracy     100} ; 默认值为 100, 连续开火第一发的精度为 100%, 值越低精度越低
      {SpreadPower       1.25} ; 默认值为 1, 大于 1 时炮弹落点会偏向中心, 小于 1 时炮弹落点会远离中心
      {SpreadXYRatio     0.75} ; 默认值为 0.75 炮弹落点的横纵向比例, 小于 1 时更偏向于纵向落点, 大于 1 时更偏向于横向落点
    }
    {OvermatchFixed
      {0  1.0000}
      {5  1.0100}
      {10 1.0300}
      {15 1.0700}
      {20 1.1300}
      {25 1.2300}
      {30 1.3600}
      {35 1.5900}
      {40 1.9000}
      {45 2.2800}
      {50 2.7800}
      {55 3.4100}
      {60 4.2300}
      {65 5.2900}
      {70 6.6900}
      {75 8.5200}
      {80 10.930}
      {85 14.150}
      {90 99.000}
    }
    ; 无防空炮配置
  }

  {Parameters "he"
    {MinRange 0} ; 最短射击距离 m
    {AimRange 350} ; AI 最长射击距离 m
    {MaxRange 350} ; 玩家最长射击距离 m
    {Speed 900} ; 炮弹速度
    {Gravity 5} ; 炮弹重力
    ; 无穿深表配置
    ; 无穿透伤害配置
    {Spreading
      {RadiusTable {0 0} {100 0.4} {500 2.5} {1000 10.00}} ; 散布
      {BurstRecoveryTime 0.1} ; 开火后恢复到正常精度的时间
      {BurstAccuracy     100} ; 默认值为 100, 连续开火第一发的精度为 100%, 值越低精度越低
      {SpreadPower       1} ; 默认值为 1, 大于 1 时炮弹落点会偏向中心, 小于 1 时炮弹落点会远离中心
      {SpreadXYRatio     1.25} ; 默认值为 0.75 炮弹落点的横纵向比例, 小于 1 时更偏向于纵向落点, 大于 1 时更偏向于横向落点
    }
    ; 无穿深修正表配置
    {FalloffStrength 0} ; 防空炮配置
  }

}
`;

it('generateWeapon', () => {
  const weapon = generateWeapon(options);
  equal(weapon, output);
});
