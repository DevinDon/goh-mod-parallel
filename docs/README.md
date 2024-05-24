# 随手记

1. 当给载具增加补给功能时，记得复制这个文件到 def 文件目录下，不然不会生成补给圈圈贴图 `resource/entity/-vehicle/germany/car/blitz3_6_art_ammo/supply_zone.ebm`
2. Boarders 和 Placers 应该在 crew 定义之后，否则会导致动画或位置异常
3. 神奇的多装填手用法 `resource/entity/-vehicle/germany/cannon/105mm_lefh18/105mm_lefh18.def`
4. 一个不知道原因的错误 `EXCEPTION_ACCESS_VIOLATION read at 0x000002b8`，出现在 M18 地狱猫和黑豹 D 型上
   1. 破案了，地狱猫的错误是因为绑定了个不存在的机枪位置
   2. 黑豹 D 型一样的问题
5. `{turnoff {shadow} {sensor} {targetable 1}}` 表示关闭该载具内成员的阴影效果以及视觉判定，并且移除该成员的不可选中状态，其他单位可以直接攻击该成员
6. CP 是指挥点数
7. `gunner2` 是防空机枪手
8. `gunner3` 是车体机枪手
9. `resource/set/environment/*.set` 中设置 far_end 可以控制雾的最远距离，6000 可以达到最远渲染距离（约 500 游戏单位）

## INF 无尽军团

### 单位

- Sd.kfz.305 卡车系列
  - 305/1 运兵卡车
  - 305/2 防空卡车，加装 Flak 30
  - 305/3 弹药补给车
  - 305/4 燃油补给车
  - 305/5 工程补给车
- Sd.Kfz 234 装甲车系列
  - 234/1
  - 234/2
  - 234/3
  - 234/4
- Sd.Kfz 251 运兵车系列
  - 251/1  半履带式装甲运兵车
  - 251/16
  - 251/17
  - 251/21
  - 251/22
- Panzer IV 四号坦克系列 狼
  - IV H 标准型
  - IV J 量产型
- Panzer V  五号坦克系列 豹
  - V A 标准型
  - V D 实验型
  - V G 量产型
- Panzer VI 六号坦克系列 虎
  - V E 标准型
  - V H 量产型
