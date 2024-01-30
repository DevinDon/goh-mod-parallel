{"vehicle.gmc_mg"
  {clip
    {viewMin    -20}  ; camera rotate upward limit (looking down)
    {viewMax    30 }  ; camera rotate downward limit (looking up)
    {distanceMin  1}    ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 0 85}
    {nearoffset -45 0 70}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "mgun_a_rot1"}
    {vignette "/texture/common/environment/lens_effects/zoom_vignette_infantry_01"}
    {blur_mask "/texture/common/environment/lens_effects/zoom_vignette_infantry_01_mask"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {offset -45 8 11}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 10}
    {no_grain}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
  }
}

{"vehicle.wc_mg"
  {clip
    {viewMin    -20}  ; camera rotate upward limit (looking down)
    {viewMax    30 }  ; camera rotate downward limit (looking up)
    {distanceMin  1}    ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 8 65}
    {nearoffset -75 8 50}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "mgun_a_rot1"}
    {vignette "/texture/common/environment/lens_effects/zoom_vignette_infantry_01"}
    {blur_mask "/texture/common/environment/lens_effects/zoom_vignette_infantry_01_mask"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {offset -45 8 11}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 10}
    {no_grain}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
  }
}

{"vehicle.jeep_mg"
  {clip
    {viewMin    -20}  ; camera rotate upward limit (looking down)
    {viewMax    30 }  ; camera rotate downward limit (looking up)
    {distanceMin  1}    ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 8 57}
    {nearoffset -75 8 42}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "mgun_a_rot1"}
    {vignette "/texture/common/environment/lens_effects/zoom_vignette_infantry_01"}
    {blur_mask "/texture/common/environment/lens_effects/zoom_vignette_infantry_01_mask"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {offset -45 8 11}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 10}
    {no_grain}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
  }
}

{"vehicle.m6_gmc"
  {clip
    {viewMin    -20  }  ; camera rotate upward limit (looking down)
    {viewMax    30  }  ; camera rotate downward limit (looking up)
    {distanceMin  1  }  ; camera min distance from object. value / 20 = meters
    {distanceMax  350  }  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "turret"}
    {faroffset 0 0 43}
    {nearoffset -75 0 28}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "camera"}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m54"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {offset 5 0 0}
    {camera "zoom1"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {no_grain}
    {no_rim_light}
    {with_owner
      {viewoff "shield"} ; removes shield to prevent clipping
    }
    {soundEffect "opentop_vehicle"}
  }
}

{"vehicle.m3a1_commander"
  {clip
    {viewMin    -20}  ; camera rotate upward limit (looking down)
    {viewMax    30 }  ; camera rotate downward limit (looking up)
    {distanceMin  1}    ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -45 0 55}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "commander_rot"}
    {vignette "/texture/common/environment/lens_effects/zoom_vignette_infantry_01"}
    {blur_mask "/texture/common/environment/lens_effects/zoom_vignette_infantry_01_mask"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {offset -45 8 11}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 10}
    {no_grain}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
  }
}

{"vehicle.m2halftrack"
  {clip
    {viewMin    -20}  ; camera rotate upward limit (looking down)
    {viewMax    30 }  ; camera rotate downward limit (looking up)
    {distanceMin  1}    ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -45 0 55}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "mgun_1_rot1"}
    {vignette "/texture/common/environment/lens_effects/zoom_vignette_infantry_01"}
    {blur_mask "/texture/common/environment/lens_effects/zoom_vignette_infantry_01_mask"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {offset -45 -8 11}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 10}
    {no_grain}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
  }
}

{"vehicle.m5_hst"
  {clip
    {viewMin    -20}  ; camera rotate upward limit (looking down)
    {viewMax    30 }  ; camera rotate downward limit (looking up)
    {distanceMin  1}    ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 0 85}
    {nearoffset -45 0 65}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "mgun_1_rot1"}
    {vignette "/texture/common/environment/lens_effects/zoom_vignette_infantry_01"}
    {blur_mask "/texture/common/environment/lens_effects/zoom_vignette_infantry_01_mask"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {offset -45 8 11}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 10}
    {no_grain}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
  }
}

{"vehicle.m13_mgmc"
  {clip
    {viewMin    -20}  ; camera rotate upward limit (looking down)
    {viewMax    30 }  ; camera rotate downward limit (looking up)
    {distanceMin  1}    ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -65 0 55}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "visor"}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m18"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {offset 10 0 0}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {no_grain}
    {no_rim_light}
    {with_owner
      {viewoff "gun_rot"}
    }
    {soundEffect "opentop_vehicle"}
  }
}

{"vehicle.m15a1_cgmc"
  {clip
    {viewMin    -20}  ; camera rotate upward limit (looking down)
    {viewMax    30 }  ; camera rotate downward limit (looking up)
    {distanceMin  1}    ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -65 0 55}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "camera"}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m64"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {offset 0 0 0}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {no_grain}
    {no_rim_light}
    {with_owner
      ;{viewoff "gun_rot"}
    }
    {soundEffect "opentop_vehicle"}
  }
}

{"vehicle.m4_mortar"
  {clip
    {viewMin    -55  }  ; camera rotate upward limit (looking down)
    {viewMax    30  }  ; camera rotate downward limit (looking up)
    {viewFar    -30  }  ; desired view angle when zooming out (not correction)
    {viewcorrection  0.2  }  ; percentage (from distanceMax) after which correction sets in. 80 in this case.
    {distanceMin  100  }  ; camera min distance from object. value / 20 = meters
    {distanceMax  350  }  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset -40 0 150}
    {nearoffset -40 0 55}
    {delta 20}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {vignette "/texture/common/environment/lens_effects/zoom_vignette_artillery_01"}
    {blur_mask "/texture/common/environment/lens_effects/zoom_vignette_infantry_01_mask"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_01"}
    {refraction_mask "/texture/common/environment/lens_effects/zoom_vignette_artillery_bp"}
    {distance 50}
    {distanceset 1}
    {delta 0}
    {offset 75 0 300}
    {camera "zoom1"}
    {linkBone "turret"}
    {gunnerviewoff 1}
    ;{ManualAccuracyZoom}
    {blur_strength 10}
    {no_grain}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
  }
  {level ;2
    {camera "zoom2"}
    {offset 75 0 400}
  }
  {level ;3
    {camera "zoom2"}
    {offset 75 0 500}
  }
  {level ;4
    {camera "zoom2"}
    {offset 75 0 600}
  }
  {level ;5
    {camera "zoom2"}
    {offset 75 0 700}
  }
  {level ;6
    {camera "zoom2"}
    {offset 75 0 800}
  }
  {level ;7
    {camera "zoom2"}
    {offset 75 0 900}
  }
}

{"vehicle.m3_gmc"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  2}    ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 0 75}
    {nearoffset -75 0 65}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    ;{offset 44 -4 8}
    {offset 0 0 0}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m33"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 2}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "opentop_vehicle"}
  }
}

{"vehicle.t30_hmc"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  2}    ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -25 0 58}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    ;{offset 44 -4 8}
    {offset 40 0 0}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m56"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom3"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "opentop_vehicle"}
  }
}

{"vehicle.m8_greyhound"
  {clip
    {viewMin    -20}  ; camera rotate upward limit (looking down)
    {viewMax    30 }  ; camera rotate downward limit (looking up)
    {distanceMin  1}    ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 -8 75}
    {nearoffset -45 -8 60}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {camera "zoom1"}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "visor1"}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m70d"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {offset -4 0 0}
    {ManualAccuracyZoom}
    {blur_strength 10}
    {no_grain}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
    {camera "zoom2"}
  }
  {level ;2
    {camera "zoom4"}
  }
  {level ;3
    {camera "zoom8"}
  }
}

{"tank.lvt4"
    {clip
      {viewMin    -20  }  ; camera rotate upward limit (looking down)
      {viewMax    30  }  ; camera rotate downward limit (looking up)
      {distanceMin  1  }  ; camera min distance from object. value / 20 = meters
      {distanceMax  350  }  ; camera max distance from object. value / 20 = meters
    }
    {level ;0
      {linkBone "basis"}
      {faroffset 0 0 80}
      {nearoffset -55 0 65}
      {camera "zoom0"}
      ;{hide_hitmarker 1}
      {blur_strength 2}
      {disable_fow 0}
      {no_grain}
      {no_rim_light}
      {ManualAccuracyZoom}
    }
  }

{"tank.m3_stuart_early"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  2}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -50 0 58}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 2 0 0}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m5"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 2}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
}

{"tank.m3_stuart_late" ; M3 Stuart (Late)
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  2}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -50 0 58}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 2 0 0}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m54"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 2}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
}

{"tank.m5a1_stuart"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  2}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -25 0 58}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 1 0 0}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m54"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
  {level ;2
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m70d"}
    {camera "zoom3"}
  }
}

{"tank.m8_hmc"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  2}    ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -25 0 58}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
    {camera "zoom1"}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    ;{offset 44 -4 8}
    {offset 9 0 0}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m56"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ;2
    {camera "zoom4"}
  }
  {level ;3
    {camera "zoom8"}
  }
}

{"tank.m24_chaffee" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "turret"}
    {faroffset 0 0 40}
    {nearoffset -50 0 25}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
    {camera "zoom1"}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 1 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m71g"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ;2
    {camera "zoom4"}
  }
  {level ;3
    {camera "zoom8"}
  }
}

{"tank.m3_lee"
  {clip
    {viewMin    -20  }  ; camera rotate upward limit (looking down)
    {viewMax    30  }  ; camera rotate downward limit (looking up)
    {distanceMin  1  }  ; camera min distance from object. value / 20 = meters
    {distanceMax  350  }  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "basis" }
    {faroffset 0 0 80}
    {nearoffset -50 0 65}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "visor1"}
    {offset -3 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m19a1"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
}

{"tank.sherman_75_early" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "mgun_a_rot1"}
    {faroffset 0 -9 20}
    {nearoffset -50 -9 6}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 31 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m70f"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
}

{"tank.sherman_75" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "mgun_a_rot1"}
    {faroffset 0 -9 20}
    {nearoffset -50 -9 6}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 31 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m70f"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
  {level ;2
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m55"}
    {camera "zoom3"}
  }
}

{"tank.sherman_75_late" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "mgun_a_rot1"}
    {faroffset 0 -9 20}
    {nearoffset -50 -9 6}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 31 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m70f"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
  {level ;2
    {camera "zoom3"}
  }
}

{"tank.sherman_75w_late" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "turret"}
    {faroffset 0 7 35}
    {nearoffset -50 7 25}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    ;{vision_modes_active}
    {linkBone "sight"}
    {offset 1 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m70f"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
  {level ;2
    {camera "zoom3"}
  }
  {level ;3
    {camera "zoom6"}
  }
}

{"tank.sherman_75w_e2" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "mgun_a_rot1"}
    {faroffset 0 7 20}
    {nearoffset -50 7 6}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    ;{vision_modes_active}
    {linkBone "sight"}
    {offset 1 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m71g"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
  {level ;2
    {camera "zoom3"}
  }
  {level ;3
    {camera "zoom6"}
  }
}

{"tank.sherman_75_calliope" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "turret"}
    {faroffset 0 0 70}
    {nearoffset 5 0 50}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 31 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m70f"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
  {level ;2
    {camera "zoom3"}
  }
}

{"tank.sherman_105" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "mgun_a_rot1"}
    {faroffset 0 -9 20}
    {nearoffset -50 -9 6}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 31 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m72d"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
  {level ;2
    {camera "zoom3"}
  }
}

{"tank.sherman_a3_105" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "mgun_a_rot1"}
    {faroffset 0 7 20}
    {nearoffset -50 7 6}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    ;{vision_modes_active}
    {linkBone "sight"}
    {offset 1 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m72d"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
  {level ;2
    {camera "zoom3"}
  }
}

{"tank.sherman_a3_105_hvss" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "mgun_a_rot1"}
    {faroffset 0 7 20}
    {nearoffset -50 7 6}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    ;{vision_modes_active}
    {linkBone "sight"}
    {offset 1 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m72d"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
  {level ;2
    {camera "zoom3"}
  }
  {level ;3
    {camera "zoom6"}
  }
}

{"tank.m18_gmc" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "turret"}
    {faroffset 0 0 35}
    {nearoffset -50 0 20}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    ;{vision_modes_active}
    {linkBone "sight"}
    {offset 2 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m71d"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 2}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "opentop_vehicle"}
  }
  {level ;2
    {camera "zoom4"}
  }
  {level ;3
    {camera "zoom8"}
  }
}

{"tank.m10_gmc" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "turret"}
    {faroffset 0 -6.5 35}
    {nearoffset -50 -6.5 20}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    ;{vision_modes_active}
    {linkBone "sight"}
    {offset 1 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m71d"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom3"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "opentop_vehicle"}
  }
}

{"tank.sherman_76" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "mgun_a_rot1"}
    {faroffset 0 9.5 20}
    {nearoffset -50 9.5 6}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 1 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m71d"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1.5"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
  {level ;2
    {camera "zoom5"}
  }
}

{"tank.sherman_76_center_50" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "mgun_a_rot1"}
    {faroffset 0 7 20}
    {nearoffset -50 7 6}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ;1
    {zoom}
    ;{vision_modes_active}
    {linkBone "sight"}
    {offset 1 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m71d"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {camera "zoom1"}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
  }
  {level ;2
    {camera "zoom5"}
  }
  {level ;3
    {camera "zoom6"}
  }
}

{"tank.m26_pershing" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "mgun_a_rot1"}
    {faroffset 0 10 20}
    {nearoffset -50 10 6}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
    {camera "zoom1"}
  }
  {level ;1
    {zoom}
    ;{vision_modes_active}
    {linkBone "sight"}
    {offset -2 0 0}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m76f"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {with_owner
      {viewoff "extra_armor"} ; removes shield to prevent clipping
    }
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ;2
    {camera "zoom4"}
  }
  {level ;3
    {camera "zoom8"}
  }
}

{"tank.m36_gmc" ;
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    41 }  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ;0
    {linkBone "turret"}
    {faroffset 0 0 35}
    {nearoffset -50 0 20}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
    {camera "zoom1"}
  }
  {level ;1
    {zoom}
    ;{vision_modes_active}
    {linkBone "sight"}
    {offset 1 0 2}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_usa_m76f"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 1}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "opentop_vehicle"}
    {camera "zoom2"}
  }
  {level ;2
    {camera "zoom4"}
  }
  {level ;3
    {camera "zoom8"}
  }
}
