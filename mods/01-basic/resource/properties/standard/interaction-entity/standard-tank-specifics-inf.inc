; 卡车

; 轮式装甲车
{"sdkfz-234-1 tank"
  ("sdkfz234_sound")
  {on "add_weapon_sound" overload
    ("Autocannon_s1")
    ("MG42")
    {link_sound "action_recoil_Cannon"  "weapon/shot/cannon/s1/recoil/Shared/Autocannon_20to30mm/"}
    {link_sound "action_recoil"  "weapon/shot/smallarms/s3/recoil/GER/MG42/"}
  }
  {on spawn
    {ani_wind "open" end}
  }
}
{"sdkfz-234-2 tank"
  ("sdkfz234_sound")
  {on "add_weapon_sound" overload
    ("Cannon_50to57mm_HV")
    ("MG42")
  }
}
{"sdkfz-234-3 tank"
  ("sdkfz234_sound")
  {on "add_weapon_sound" overload
    ("Cannon_75to76mm_LV")
    ("Cannon_Breech")
    ("MG42")
  }
  {on "gunner2_hatch_open" overload
    {ani_play "mgun_aa" +1.0 resume}
  }
  {on "gunner2_hatch_close" overload
    {ani_play "mgun_aa" -1.0 resume}
  }
  {on "spawn_shell_delay" overload
    ("shell_eject_delay" args 1.0 0.3)
  }
  {on "reload_delay" overload
    ("reload_time" args 6)    ;// weapon reload time
  }
}
{"sdkfz-234-4 tank"
  ("sdkfz234_sound")
  {on "add_weapon_sound" overload
    ("Cannon_75to76mm")
    ("Cannon_Breech")
    ("MG42")
  }
  {on "spawn_shell_delay" overload
    ("shell_eject_delay" args 0.15 0.05)
  }
  {on "reload_delay" overload
    ("reload_time" args 5.25)    ;// weapon reload time
  }
}

; 履带式装甲车
{"sdkfz-251-1 tank"
  ("hanomag_sound")

  {on "event_no_crew" overload}
  {on "event_with_crew" overload}

  {on "gunner2_hatch_open" overload
    {ani_play "mgun_aa" +1.0 resume}
  }
  {on "gunner4_hatch_open" overload
    {ani_play "mgun_aa_2" +1.0 resume}
  }
  {on "gunner4_hatch_close" overload
    {ani_play "mgun_aa_2" -1.0 resume}
  }
}
{"sdkfz-251-16 tank"
  ("hanomag_sound")

  {on spawn
    {add_view "flamer_fire_tank" "gun" "foresight1"}
    {add_view "flamer_fire_tank" "gun1" "foresight2"}
  }

  {on "event_no_crew" overload}
  {on "event_with_crew" overload}

  {on "gunner2_hatch_open" overload
    {ani_play "mgun_aa" +1.0 resume}
  }

  {on "_explosion"
    {spawn "fuel_die"}
    {blastwave c4 5 r0 4 r1 15}
    {fire radius 5 time 15 heating 10}
  }
  ("flame_weapon" args gun 60 1 40)
  ("flame_weapon" args gun1 60 2 40)
}
{"sdkfz-251-17 tank"
  ("hanomag_sound")
  {on "add_weapon_sound" overload
    ("Autocannon_s1")
    {link_sound "action_recoil_Cannon"  "weapon/shot/cannon/s1/recoil/Shared/Autocannon_20to30mm/"}
  }
  {on "zenite_terrain_fx" overload} ; // overwrites and stops dust fx on ground from firing main gun
}
{"sdkfz-251-21 tank"
  ("hanomag_sound")
  {on "add_weapon_sound" overload
    ("MG151_15_Drilling")
  }
  ("multi_barrel_loop" flash(flash_gun_hmg_m2hb) smoke(ejectsmoke_big) shell(shell_hmgun) weapon(gun) head(0.081))

  {on "zenite_terrain_fx" overload} ; // overwrites and stops dust fx on ground from firing main gun
}
{"sdkfz-251-22 tank"
  ("hanomag_sound")
  {on "add_weapon_sound" overload
    ("Cannon_75to76mm")
  }
  {on "spawn_shell_delay" overload
    ("shell_eject_delay" args 0.30 0.25)
  }
  {on "reload_delay" overload
    ("reload_time" args 5.25)  ;// weapon reload time
  }
}

; 坦克
{"panzer-4-h tank"
  ("pz4_sound")
  {on "add_weapon_sound" overload
    ("Cannon_75to76mm")
    ("MG34")
  }
  {on "commander_hatch_open" overload
    {ani_wind "open" end}
    {ani_play "mgun_aa" +1.0 resume}
  }
  {on "commander_hatch_close" overload
    {ani_play "open" -1.0 resume}
    {ani_play "mgun_aa" -1.0 resume}
  }
}
{"panzer-4-j tank"
  {on "add_weapon_sound" overload
    ("Cannon_75to76mm")
    ("MG34")
  }
  {on "add_movement_sound" overload
    {link_sound "engine_start"    "vehicle/engine/pz4/start"}
    {link_sound "engine_stop"    "vehicle/engine/pz4/stop"}
    {link_sound "engine_idle"    "vehicle/engine/pz4/idle"}
    {link_sound "engine_full"    "vehicle/engine/pz4/full"}
    {link_sound "exhaust"      "vehicle/engine/pz4/exhaust"}
    {link_sound "move"        "vehicle/tracks/pz4"}
    {link_sound "rotate_turret"    "vehicle/turret/handcrank/handcrank_heavy"}
  }
  {on "commander_hatch_open" overload
    {ani_wind "open" end}
    {ani_play "mgun_aa" +1.0 resume}
  }
  {on "commander_hatch_close" overload
    {ani_play "open" -1.0 resume}
    {ani_play "mgun_aa" -1.0 resume}
  }
}

{"panzer-5-a tank"
  ("pz5_sound")
  {on "add_weapon_sound" overload
    ("Cannon_75to76mm_HV")
    ("MG34")
  }
  {on "commander_hatch_open" overload
    {ani_wind "open" end}
    {ani_play "mgun_aa" +1.0 resume}
  }
  {on "commander_hatch_close" overload
    {ani_play "open" -1.0 resume}
    {ani_play "mgun_aa" -1.0 resume}
  }
}
{"panzer-5-d tank"
  ("pz5_sound")
  {on "add_weapon_sound" overload
    ("Cannon_75to76mm_HV")
    ("MG34")
  }
}
{"panzer-5-g tank"
  ("pz5_sound")
  {on "add_weapon_sound" overload
    ("Cannon_75to76mm_HV")
    ("MG34")
  }
  {on "commander_hatch_open" overload
    {ani_wind "open" end}
    {ani_play "mgun_aa" +1.0 resume}
  }
  {on "commander_hatch_close" overload
    {ani_play "open" -1.0 resume}
    {ani_play "mgun_aa" -1.0 resume}
  }
}

{"panzer-6-e tank"
  ("pz6_sound")
  {on "add_weapon_sound" overload
    ("Cannon_85to100mm")
    ("MG34")
  }
  {on "commander_hatch_open" overload
    {ani_wind "open" end}
    {ani_play "mgun_aa" +1.0 resume}
  }
  {on "commander_hatch_close" overload
    {ani_play "open" -1.0 resume}
    {ani_play "mgun_aa" -1.0 resume}
  }
}
{"panzer-6-e-ace tank"
  ("pz6_sound")
  {on "add_weapon_sound" overload
    ("Cannon_85to100mm")
    ("MG34")
  }
  {on "commander_hatch_open" overload
    {ani_wind "open" end}
    {ani_play "mgun_aa" +1.0 resume}
  }
  {on "commander_hatch_close" overload
    {ani_play "open" -1.0 resume}
    {ani_play "mgun_aa" -1.0 resume}
  }
}
{"panzer-6-h tank"
  ("pz6_sound")
  {on "add_weapon_sound" overload
    ("Cannon_85to100mm")
    ("MG34")
  }
  {on "commander_hatch_open" overload
    {ani_wind "open" end}
  }
  {on "commander_hatch_close" overload
    {ani_play "open" -1.0 resume}
  }
}


{"panzer-6-b-h tank"
  ("pz6b_sound")
  {on "add_weapon_sound" overload
    ("Cannon_85to100mm_HV")
    ("MG34")
  }
  {on "commander_hatch_open" overload
    {ani_wind "open" end}
    {ani_play "mgun_aa" +1.0 resume}
  }
  {on "commander_hatch_close" overload
    {ani_play "open" -1.0 resume}
    {ani_play "mgun_aa" -1.0 resume}
  }
}
{"panzer-6-b-h-ace tank"
  ("pz6b_sound")
  {on "add_weapon_sound" overload
    ("Cannon_85to100mm_HV")
    ("MG34")
  }
  {on "commander_hatch_open" overload
    {ani_wind "open" end}
    {ani_play "mgun_aa" +1.0 resume}
  }
  {on "commander_hatch_close" overload
    {ani_play "open" -1.0 resume}
    {ani_play "mgun_aa" -1.0 resume}
  }
}
{"panzer-6-b-p tank"
  ("pz6b_sound")
  {on "add_weapon_sound" overload
    ("Cannon_85to100mm_HV")
    ("MG34")
  }
  {on "commander_hatch_open" overload
    {ani_wind "open" end}
    {ani_play "mgun_aa" +1.0 resume}
  }
  {on "commander_hatch_close" overload
    {ani_play "open" -1.0 resume}
    {ani_play "mgun_aa" -1.0 resume}
  }
}
