(include "/properties/standard/vehicle/tank-config.ext")
(include "/properties/selection/vehicle.inc" scale(1.1))

{Extension "m36_gmc.mdl"}
(include   "m36_gmc.ext")
(include   "crew-and-seat.ext")

{Props "m36_gmc" "td" "medium" "vision_lev04" "muzzle_85mm_93mm" "shell_eject" "shield" "open_top" "detect_td_medium" "muzzle_hmg_m2hb"}

{PatherId "m10_gmc"}
{Targetclass "tank_medium"}
{TargetSelector "tank_medium"}

{Boarder
  {anm "driver"
    {forward {begin "board_tank_left"} {base "open_driver"}}
    {reverse {end "emit_tank_1_hold"} {base "open_driver"}}
  }
  {anm "co_driver"
    {forward {begin "board_tank_right"} {base "open_co_driver"}}
    {reverse {end "emit_tank_1_hold"} {base "open_co_driver"}}
  }
  {anm "left"
    {forward {begin "board_tank_left"}}
    {reverse {end "emit_tank_1_hold"}}
  }
  {anm "right"
    {forward {begin "board_tank_right"}}
    {reverse {end "emit_tank_1_hold"}}
  }
  {anm "charger_l"
    {forward {begin "board_tank_left"} {end "seat_m18_charger"}}
    {reverse {end "emit_tank_1_hold"}}
  }
  {anm "charger_r"
    {forward {begin "board_tank_right"} {end "seat_m18_charger"}}
    {reverse {end "emit_tank_1_hold"}}
  }
  {anm "gunner_l"
    {forward {begin "board_tank_left"} {end "seat_m10_commander"}}
    {reverse {end "emit_tank_1_hold"}}
  }
  {anm "gunner_r"
    {forward {begin "board_tank_right"} {end "seat_m10_commander"}}
    {reverse {end "emit_tank_1_hold"}}
  }
  {anm "charger2_l"
    {forward {begin "board_tank_left"} {end "seat_m3a1_gunner50"}}
    {reverse {end "emit_tank_1_hold"}}
  }
  {anm "charger2_r"
    {forward {begin "board_tank_right"} {end "seat_m3a1_gunner50"}}
    {reverse {end "emit_tank_1_hold"}}
  }
  {anm "armor1"
    {forward {begin "board_HighArmor"} {end "pose_seat_armor_1"}}
    {reverse {end "emit_tank_2"}}
  }
}

{Sensor
  {Visor "around"
    {Vision "standard-vision-around"}
  }
}

{Weaponry
  {RestoreIKTime 5}
  {Place "gun"
    {RestoreIKAfterAim}
    {Weapon "weapon usa-90mm-m3" filling "ammo usa-90x600 apcbche" 1}
    {Gunner "gunner"}
    {Charger "charger"}
    {AccuracyByMotion
      {MaxLinearSpeed  7.00} ; km/h
      {ByLinearSpeed   0.25} ; km/h
      {MaxAngularSpeed 3.00} ; deg/s
      {ByAngularSpeed  0.35} ; deg/s
      {DisorderTime    0.25} ; s
      {OrderTime       2.50} ; s
    }
  }
  {Place "mgun"
    {Type "aa"}
    {Weapon "weapon usa-browning-m2" filled}
    {Gunner "charger2"}
    {Charger "charger2"}
    {LinkBone "mgun"}
    {LinkAnimation "off"}
    {ai_in_manual}
    {Basic}
    {AccuracyByMotion
      {MaxLinearSpeed   8.00} ; km/h
      {ByLinearSpeed    0.40} ; km/h
      {MaxAngularSpeed 30.00} ; deg/s
      {ByAngularSpeed   0.50} ; deg/s
      {DisorderTime     0.60} ; s
      {OrderTime        1.00} ; s
    }
  }
}

{Mass 28770}
{Chassis "track"
  ("set-tank-trace" fx("tracks_mid") step(0.52) length(0.7) boneleft("FXtraceL1") boneright("FXtraceR1"))
  ("set-maneuverability-of-tank" speed(42) power(420) mass(28770) performance(1.0))
  ("set-fuel-bag" volume(635) power(420))
}

{Bone "gun_rot"
  {limits -10 20}
  {speed2 4}
}
{Bone "turret"
  {speed2 12}
}
{Bone "mgun_a_rot1"
  {limits -15 15}
  {speed2 60}
}
{Bone "mgun_a_rot2"
  {limits -10 35}
  {speed2 60}
}
