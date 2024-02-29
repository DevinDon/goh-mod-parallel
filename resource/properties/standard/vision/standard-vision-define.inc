; standard vision define

; private-set-animal-spotting
; args = radius
(define "private-set-animal-spotting"
  {animal (* 1.00 %radius)}
)

; private-set-human-spotting
; args = radius
(define "private-set-human-spotting"

  {human         (* 1.00 %radius)  ; fallback value if no other subordinated case is applicable
    {visible     (* 1.00 %radius)} ; once human is spotted, the distance the human will remain spotted until Line Of Sight is broken. When placed outside of a specific stance block, it becomes a master value for all stances.
    {firing      (* 1.50 %radius)  ; To achieve a constant distance of firing through noise, it divides by the radius multiplier. 1st Green line in v_visor
      ("firing")                   ; Preset from above (a modifier picked here is final, the stance for example will not be considered anymore)
    }
    {cover       (* 0.90 %radius)  ; default value incase condition isn't defined below. Important that {cover} block comes before non-cover {stand}, {squat}, and {crawl} blocks, else cover values will be overwritten.
      {stand     (* 0.85 %radius)  ; "stand" stance - in cover
        {stealth (* 0.75 %radius)} ; "stand" stance - in cover and human has stealth skill
      }
      {squat     (* 0.60 %radius)  ; "squat" stance - in cover
        {stealth (* 0.35 %radius)} ; "squat" stance - in cover and human has stealth skill
      }
      {crawl     (* 0.30 %radius)  ; "crawl" stance - in cover
        {stealth (* 0.20 %radius)} ; "crawl" stance - in cover and human has stealth skill
      }
    }
    {stand       (* 1.25 %radius)  ; "stand" stance - moving. Also serves as default if other conditions are not defined in this block.
      {stealth   (* 1.00 %radius)} ; "stand" stance - moving and human has stealth skill
      {still     (* 1.00 %radius)  ; "stand" stance - still / not moving. standing.
        {stealth (* 0.85 %radius)} ; "stand" stance - still / not moving and human has stealth skill
      }
    }
    {squat       (* 0.80 %radius)  ; "squat" stance - moving. Also serves as default if other conditions are not defined in this block. (doesn't apply, squat motion doesn't exist in Gem2)
      {stealth   (* 0.60 %radius)} ; "squat" stance - moving and human has stealth skill (doesn't apply, squat motion doesn't exist in Gem2)
      {still     (* 0.65 %radius)  ; "squat" stance - still / not moving. kneeling.
        {stealth (* 0.50 %radius)} ; "squat" stance - still / not moving and human has stealth skill
      }
    }
    {crawl       (* 0.40 %radius)  ; "crawl" stance - moving. Also serves as default if other conditions are not defined in this block.
      {stealth   (* 0.30 %radius)} ; "crawl" stance - moving and human has stealth skill
      {still     (* 0.25 %radius)  ; "crawl" stance - still / not moving. kneeling.
        {stealth (* 0.20 %radius)} ; "crawl" stance - still / not moving. kneeling and human has stealth skill
      }
    }
  }

)

; private-set-cannon-spotting
; args = radius
(define "private-set-cannon-spotting"

  ; heavy mgun
  {cannon_00 (* 0.75 (* 1.00 %radius))  ; distance at which it will be spotted when moving
    {firing  (* 0.75 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible (* 0.75 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still   (* 0.75 (* 0.50 %radius))} ; unit still / not moving. 1st Blue line in v_visor
  }

  ; infantry mortar
  {cannon_01 (* 0.80 (* 1.00 %radius))  ; distance at which it will be spotted when moving
    {firing  (* 0.80 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible (* 0.80 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still   (* 0.80 (* 0.50 %radius))} ; unit still / not moving. 1st Blue line in v_visor
  }

  ; light gun
  {cannon_02 (* 0.90 (* 1.00 %radius))  ; distance at which it will be spotted when moving
    {firing  (* 0.90 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible (* 0.90 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still   (* 0.90 (* 0.50 %radius))} ; unit still / not moving
  }

  ; medium gun
  {cannon_03 (* 1.00 (* 1.00 %radius))  ; distance at which it will be spotted when moving
    {firing  (* 1.00 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible (* 1.00 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still   (* 1.00 (* 0.50 %radius))} ; unit still / not moving
  }

  ; heavy gun
  {cannon_04 (* 1.25 (* 1.00 %radius))  ; distance at which it will be spotted when moving
    {firing  (* 1.25 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible (* 1.25 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still   (* 1.25 (* 0.50 %radius))} ; unit still / not moving
  }

  ; artillery
  {cannon_05 (* 1.50 (* 1.00 %radius))  ; distance at which it will be spotted when moving
    {firing  (* 1.50 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible (* 1.50 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still   (* 1.50 (* 0.50 %radius))} ; unit still / not moving
  }

)

; private-set-vehicle-spotting
; args = radius
(define "private-set-vehicle-spotting"   ; This section defines the distances at which different types of vehicles are spotted under various conditions.

  ; goliath
  {vehicle_00 (* 0.50 (* 1.25 %radius))  ; distance at which it will be spotted when moving, 50m past visor range.
    {firing   (* 0.50 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible  (* 0.50 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still    (* 0.50 (* 1.00 %radius))} ; unit still / not moving
  }

  ; moto, jeep
  {vehicle_01 (* 0.75 (* 1.25 %radius))  ; distance at which it will be spotted when moving, 50m past visor range.
    {firing   (* 0.75 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible  (* 0.75 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still    (* 0.75 (* 1.00 %radius))} ; unit still / not moving
  }

  ; armoredcars, trucks
  {vehicle_02 (* 1.00 (* 1.25 %radius))  ; distance at which it will be spotted when moving, 50m past visor range.
    {firing   (* 1.00 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible  (* 1.00 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still    (* 1.00 (* 1.00 %radius))} ; unit still / not moving
  }

  ; light tanks
  {vehicle_03 (* 1.20 (* 1.25 %radius))  ; distance at which it will be spotted when moving, 50m past visor range.
    {firing   (* 1.20 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible  (* 1.20 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still    (* 1.20 (* 1.00 %radius))} ; unit still / not moving
  }

  ; medium tanks, rocket artillery
  {vehicle_04 (* 1.35 (* 1.25 %radius))  ; distance at which it will be spotted when moving, 50m past visor range.
    {firing   (* 1.35 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible  (* 1.35 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still    (* 1.35 (* 1.00 %radius))} ; unit still / not moving
  }

  ; heavy tanks
  {vehicle_05 (* 1.50 (* 1.25 %radius))  ; distance at which it will be spotted when moving, 50m past visor range.
    {firing   (* 1.50 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible  (* 1.50 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still    (* 1.50 (* 1.00 %radius))} ; unit still / not moving
  }

  ; SPG indirect artillery vehicles (105+mm)
  {vehicle_06 (* 1.50 (* 1.25 %radius))  ; distance at which it will be spotted when moving, 50m past visor range.
    {firing   (* 2.00 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible  (* 1.50 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still    (* 1.50 (* 1.00 %radius))} ; unit still / not moving
  }

  ; recon aircraft
  {plane_01   (* 2.00 (* 1.25 %radius))  ; distance at which it will be spotted when moving
    {firing   (* 2.00 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible  (* 2.00 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still    (* 2.00 (* 1.00 %radius))} ; unit still / not moving
  }

  ; fighter/bomber aircraft
  {plane_02   (* 3.00 (* 1.25 %radius))  ; distance at which it will be spotted when moving
    {firing   (* 3.00 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible  (* 3.00 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still    (* 3.00 (* 1.00 %radius))} ; unit still / not moving
  }

)

; private-set-ship-spotting
; args = radius
(define "private-set-ship-spotting"     ; This section defines the distances at which different types of ships are spotted under various conditions.

  ; Small vessel
  {marine_01 (* 0.50 (* 1.50 %radius))  ; distance at which it will be spotted when moving, 50m past visor range.
    {firing  (* 0.50 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible (* 0.50 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still   (* 0.50 (* 1.00 %radius))} ; unit still / not moving
  }

  ; Marine Small
  {marine_02 (* 0.75 (* 1.50 %radius))  ; distance at which it will be spotted when moving, 50m past visor range.
    {firing  (* 0.75 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible (* 0.75 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still   (* 0.75 (* 1.00 %radius))} ; unit still / not moving
  }

  ; Marine Medium
  {marine_03 (* 1.00 (* 1.50 %radius))  ; distance at which it will be spotted when moving, 200m past visor range.
    {firing  (* 1.00 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible (* 1.00 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still   (* 1.00 (* 1.00 %radius))} ; unit still / not moving
  }

  ; Marine Large
  {marine_04 (* 1.25 (* 1.50 %radius))  ; distance at which it will be spotted when moving, 200m past visor range.
    {firing  (* 1.25 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible (* 1.25 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still   (* 1.25 (* 1.00 %radius))} ; unit still / not moving
  }

  ; Marine Max
  {marine_05 (* 1.50 (* 1.50 %radius))  ; distance at which it will be spotted when moving, 200m past visor range.
    {firing  (* 1.50 (* 2.00 %radius))} ; When this unit fires its weapon, it will be spotted up to this distance. Then, it will become fogged again after remaining visible for the period of time defined in set/detect.set
    {visible (* 1.50 (* 0.75 %radius))} ; once spotted, the distance the unit will remain spotted until Line Of Sight is broken.
    {still   (* 1.50 (* 1.00 %radius))} ; unit still / not moving
  }

)

; 距离是平方，我也不知道为啥，离谱
; args = radius visible shootable
(define "set-spotting"
  {radius %radius}
  {rules
    ("private-set-animal-spotting"  radius(%radius))
    ("private-set-human-spotting"   radius(%radius))
    ("private-set-cannon-spotting"  radius(%radius))
    ("private-set-vehicle-spotting" radius(%radius))
    ("private-set-ship-spotting"    radius(%radius))
  }
  {mods ; no nested blocks allowed, but all applicable values will be multiplied
    {stand 1}
  }
)

; no args
(define "set-hearing-spotting"
  ("hearing" args 1)
)

; vision define

; standard-vision-narrow 前方窄视角
{"standard-vision-narrow"
  {uncover  25}
  {h_fov    30} ; 水平
  {v_fov    30} ; 垂直
  ("set-spotting" radius(16))
}

; standard-vision-medium 前方中视角
{"standard-vision-medium"
  {uncover  25}
  {h_fov    60} ; 水平
  {v_fov    90} ; 垂直
  ("set-spotting" radius(15))
}

; standard-vision-wide 前方宽视角
{"standard-vision-wide"
  {uncover  20}
  {h_fov    120} ; 水平
  {v_fov    180} ; 垂直
  ("set-spotting" radius(14))
}

; standard-vision-around 全景环绕视角
{"standard-vision-around"
  {uncover  15}
  {h_fov   240} ; 水平
  {v_fov   180} ; 垂直
  ("set-spotting" radius(12))
}

; standard-vision-noise-detection 环境噪音检测视角
{"standard-vision-noise-detection"
  {uncover   5}
  {h_fov   360} ; 水平
  {v_fov   180} ; 垂直
  ("set-hearing-spotting")
}

; standard-vision-none 无视角
{"standard-vision-none"}
