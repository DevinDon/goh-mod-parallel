; standard third person control vision for Germany

{"custom.truck"
  {clip
    {viewMin    -20}  ; camera rotate upward limit (looking down)
    {viewMax    30}  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 60}
    {nearoffset 0 0 65}
    {camera "zoom0"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
    {no_rim_light}
  }
}

{"custom.truck.flak30"
  {clip
    {viewMin    -15}  ; camera rotate upward limit (looking down)
    {viewMax    50}  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  300}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "turret"}
    {faroffset 0 10 45}
    {nearoffset -20 10 25}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "camera"}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_ger_20mm"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 18}
    {distanceSet 0}
    {delta 0}
    {offset 10 -4 4}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
    {camera "zoom1.5"}
  }
  {level ; 2
    {camera "zoom3"}
  }
  {level ; 3
    {camera "zoom5"}
  }
}

{"custom.armored-car.sdkfz231"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 50}
    {nearoffset -20 0 50}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "turret"}
    {offset 42 6.0 4.5}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_tzf_4"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom3"}
  }
  {level ; 3
    {camera "zoom5"}
  }
}

{"custom.armored-car.sdkfz234-1"
  {clip
    {viewMin    -10}  ; camera rotate upward limit (looking down)
    {viewMax    20}  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  250}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 50}
    {nearoffset -20 0 48}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "turret"}
    {offset 39 7 15.5}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_tzf_4"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}    ; activation distance
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom3"}
  }
  {level ; 3
    {camera "zoom5"}
  }
}

{"custom.armored-car.sdkfz234-2"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20}  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -45 0 60}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "turret"}
    {offset 50 -6.5 1.5}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_ger_tzf_4b"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {no_rim_light}
    {with_owner
      {viewoff "shieldt shieldl5 shieldr5"} ; removes shield to prevent clipping
    }
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom3"}
  }
  {level ; 3
    {camera "zoom5"}
  }
}

{"custom.armored-car.sdkfz234-3"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -45 0 60}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "turret"}
    {offset 50 -6.5 1.5}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_ger_sflz1"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom3"}
  }
  {level ; 3
    {camera "zoom5"}
  }
}

{"custom.armored-car.sdkfz234-4"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -45 0 60}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "turret"}
    {offset 45 -6.5 10.5}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_zf3x8ii"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom3"}
  }
  {level ; 3
    {camera "zoom5"}
  }
}

{"custom.spg"
  {clip
    {viewMin    -40  }  ; camera rotate upward limit (looking down)
    {viewMax    30  }  ; camera rotate downward limit (looking up)
    {distanceMin  1  }  ; camera min distance from object. value / 20 = meters
    {distanceMax  350  }  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 80}
    {nearoffset -50 0 60}
    {blur_strength 2}
    {disable_fow 0}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {vignette "/texture/common/environment/lens_effects/zoom_vignette_artillery_01"}
    {blur_mask "/texture/common/environment/lens_effects/zoom_vignette_infantry_01_mask"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_01"}
    {refraction_mask "/texture/common/environment/lens_effects/zoom_vignette_artillery_bp"}
    {distance 50}
    {distanceset 1}
    {delta 0}
    {linkBone "gun"}
    {offset 75 0 300}
    {gunnerviewoff 1}
    ;{ManualAccuracyZoom}
    {blur_strength 10}
    {disable_fow 0}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom3"}
    {offset 100 0 500}
  }
  {level ; 3
    {camera "zoom3"}
    {offset 100 0 600}
  }
  {level ; 4
    {camera "zoom4"}
    {offset 200 0 600}
  }
  {level ; 5
    {camera "zoom4"}
    {offset 200 0 700}
  }
  {level ; 6
    {camera "zoom5"}
    {offset 300 0 700}
  }
  {level ; 7
    {camera "zoom5"}
    {offset 300 0 800}
  }
}

{"custom.spg.grille-k"
  {clip
    {viewMin    -15}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  400}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 75}
    {nearoffset -25 0 65}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {vignette "/texture/common/environment/lens_effects/zoom_vignette_artillery_01"}
    {blur_mask "/texture/common/environment/lens_effects/zoom_vignette_infantry_01_mask"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_01"}
    {refraction_mask "/texture/common/environment/lens_effects/zoom_vignette_artillery_bp"}
    {distance 50}
    {distanceset 1}
    {delta 0}
    {linkBone "gun"}
    {offset 75 0 300}
    {gunnerviewoff 1}
    ;{ManualAccuracyZoom}
    {blur_strength 10}
    {disable_fow 0}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom3"}
    {offset 100 0 500}
  }
  {level ; 3
    {camera "zoom3"}
    {offset 100 0 600}
  }
  {level ; 4
    {camera "zoom4"}
    {offset 200 0 600}
  }
  {level ; 5
    {camera "zoom4"}
    {offset 200 0 700}
  }
  {level ; 6
    {camera "zoom5"}
    {offset 300 0 700}
  }
  {level ; 7
    {camera "zoom5"}
    {offset 300 0 800}
  }
}

{"custom.tank"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax     41}  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "fxfire3"}
    {faroffset 0 7 30}
    {nearoffset 5 7 16}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "fxfire3"}
    {offset 55 0 6}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_tzf_12a"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
  {level ; 4
    {camera "zoom10"}
  }
}

{"tank.panzer2l"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 50}
    {nearoffset -20 0 50}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "turret"}
    {offset 42 6.0 4.5}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_tzf_4"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom3"}
  }
  {level ; 3
    {camera "zoom4"}
  }
  {level ; 4
    {camera "zoom8"}
  }
  {level ; 5
    {camera "zoom10"}
  }
}

{"custom.tank.hetzer"
  {clip
    {viewMin    -15}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  400}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 65}
    {nearoffset -25 0 50}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "visor1"}
    {offset 5 0 2.5}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_ger_sflz5a"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 5}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
}

{"custom.tank.marder3-m"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  400}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 65}
    {nearoffset -40 0 60}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "turret"}
    {offset 30 -6 10}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_zf3x8ii"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 20}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "opentop_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
}

{"custom.tank.grille-m"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  400}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 65}
    {nearoffset -40 0 60}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "turret"}
    {offset 5 7 21}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_ger_zf1x40"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 10}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "opentop_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
}

{"custom.tank.stug3"
  {clip
    {viewMin    -15}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  400}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 65}
    {nearoffset -25 0 55}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "visor1"}
    {offset 3 0 3}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_ger_sflz5a"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 5}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
}

{"custom.tank.stuh42"
  {clip
    {viewMin    -15  }  ; camera rotate upward limit (looking down)
    {viewMax    20  }  ; camera rotate downward limit (looking up)
    {distanceMin  200  }  ; camera min distance from object. value / 20 = meters
    {distanceMax  400  }  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 65}
    {nearoffset -25 0 55}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "visor1"}
    {offset 3 0 3}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_ger_rblf36"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 5}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
}

{"custom.tank.panzer3-m"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -45 0 60}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "turret"}
    {offset 50 -6.5 1.5}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_tzf_5e"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {no_rim_light}
    {with_owner
      {viewoff "shieldt shieldl5 shieldr5"} ; removes shield to prevent clipping
    }
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
}

{"custom.tank.panzer3-n"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -45 0 60}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "turret"}
    {offset 52 -8 1.5}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_tzf_5b"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {no_rim_light}
    {with_owner
      {viewoff "shieldt shieldl5 shieldr5"} ; removes shield to prevent clipping
    }
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
}

{"custom.tank.panzer4-g"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -45 0 60}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "turret"}
    {offset 52 -8 1.5}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_tzf_5f"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {no_rim_light}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
}

{"custom.tank.panzer4-h"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 70}
    {nearoffset -45 0 60}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "turret"}
    {offset 52 -8 1.5}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_tzf_5f1"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {no_rim_light}
    {with_owner
      {viewoff "shieldt turret_basket"} ; removes shield to prevent clipping
    }
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
}

{"custom.tank.wirbelwind"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax     80}  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 90}
    {nearoffset 0 0 80}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 15 0 -3}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_ger_20mm"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
}

{"custom.tank.ostwind"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax     80}  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 80}
    {nearoffset -50 0 80}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 30 -0.3 1.5}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_ger_37mm"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 40}
    {distanceSet 0}
    {delta 0}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {no_rim_light}
    {soundEffect "opentop_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
}

{"custom.tank.tiger-e"
  {clip
    {viewMin     -12}   ; camera rotate upward limit (looking down)
    {viewMax      41}   ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "fxfire3"}
    {faroffset 0 10 27}
    {nearoffset 5 10 10.5}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "fxfire3"}
    {offset 55 1 3}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_tzf_9b"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
  {level ; 4
    {camera "zoom10"}
  }
}

{"custom.tank.tiger-h"
  {clip
    {viewMin     -12}  ; camera rotate upward limit (looking down)
    {viewMax     41}  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "fxfire3"}
    {faroffset 0 10 27}
    {nearoffset 5 10 10.5}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "fxfire3"}
    {offset 55 1 3}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_tzf_9b"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
  {level ; 4
    {camera "zoom10"}
  }
}

{"custom.tank.tiger2-p"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax     41}  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "fxfire3"}
    {faroffset 0 8.5 30}
    {nearoffset 5 8.5 16}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "fxfire3"}
    {offset 55 0 6}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_tzf_9b"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
  {level ; 4
    {camera "zoom10"}
  }
}

{"custom.tank.tiger2-h"
  {clip
    {viewMin    -12}  ; camera rotate upward limit (looking down)
    {viewMax     41}  ; camera rotate downward limit (looking up)
    {distanceMin  002}  ; camera min distance from object. value / 20 = meters
    {distanceMax  350}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "fxfire3"}
    {faroffset 0 8.5 30}
    {nearoffset 5 8.5 16}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "fxfire3"}
    {offset 53 0 7}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_tzf_9d"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 30}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
  {level ; 4
    {camera "zoom10"}
  }
}

{"custom.tank.jagdpanther"
  {clip
    {viewMin    -15}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  400}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 75}
    {nearoffset -40 0 65}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "visor1"}
    {offset 5 0 3}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_wzf1-4"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 5}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
  {level ; 4
    {camera "zoom10"}
  }
}

{"custom.tank.ferdinand"
  {clip
    {viewMin    -15}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  400}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 85}
    {nearoffset -40 0 75}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "visor1"}
    {offset 6 0 3}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_ger_sflz1a"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 5}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
  {level ; 4
    {camera "zoom10"}
  }
}

{"custom.tank.sturmtiger"
  {clip
    {viewMin    -15}  ; camera rotate upward limit (looking down)
    {viewMax    45 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  400}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 75}
    {nearoffset -25 0 60}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "visor1"}
    {offset 10 0 3}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_zf3x8"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 15}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
  {level ; 4
    {camera "zoom10"}
  }
}

{"custom.tank.jagdtiger"
  {clip
    {viewMin    -15}  ; camera rotate upward limit (looking down)
    {viewMax    20 }  ; camera rotate downward limit (looking up)
    {distanceMin  200}  ; camera min distance from object. value / 20 = meters
    {distanceMax  400}  ; camera max distance from object. value / 20 = meters
  }
  {level ; 0
    {linkBone "basis"}
    {faroffset 0 0 85}
    {nearoffset -40 0 75}
    {camera "zoom1"}
    ;{hide_hitmarker 1}
    {blur_strength 2}
    {disable_fow 0}
    {no_grain}
  }
  {level ; 1
    {zoom}
    {vision_modes_active}
    {linkBone "sight"}
    {offset 6 0 3}
    {scope_vignette "/texture/common/environment/lens_effects/vehicle_telescope_ger_sflz1a"}
    {blur_mask "/texture/common/environment/lens_effects/vehicle_telescope_mask"}
    {refraction_mask "/texture/common/environment/lens_effects/vehicle_telescope_base_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_02"}
    {distance 5}
    {distanceSet 0}
    {delta 0}
    {no_rim_light}
    {ManualAccuracyZoom}
    {blur_strength 5}
    {disable_fow 0}
    {soundEffect "enclosed_vehicle"}
    {camera "zoom2"}
  }
  {level ; 2
    {camera "zoom4"}
  }
  {level ; 3
    {camera "zoom8"}
  }
  {level ; 4
    {camera "zoom10"}
  }
}
