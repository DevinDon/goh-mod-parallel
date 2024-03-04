# 随手记

1. 当给载具增加补给功能时，记得复制这个文件到 def 文件目录下，不然不会生成补给圈圈贴图 `resource/entity/-vehicle/germany/car/blitz3_6_art_ammo/supply_zone.ebm`
2. Boarders 和 Placers 应该在 crew 定义之后，否则会导致动画或位置异常
3. 神奇的多装填手用法 `resource/entity/-vehicle/germany/cannon/105mm_lefh18/105mm_lefh18.def`
4. 一个不知道原因的错误 `EXCEPTION_ACCESS_VIOLATION read at 0x000002b8`，出现在 M18 地狱猫和黑豹 D 型上
   1. 破案了，地狱猫的错误是因为绑定了个不存在的机枪位置
   2. 黑豹 D 型一样的问题
5. `{turnoff {shadow} {sensor} {targetable 1}}` 表示关闭该载具内成员的阴影效果以及视觉判定，并且移除该成员的不可选中状态，其他单位可以直接攻击该成员
6. CP 是指挥点数
