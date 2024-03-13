
{"e-25 tank"
  {on "add_movement_sound" overload
    {link_sound "engine_start"  "vehicle/engine/pz4/start"}
    {link_sound "engine_stop"   "vehicle/engine/pz4/stop"}
    {link_sound "engine_idle"   "vehicle/engine/pz4/idle"}
    {link_sound "engine_full"   "vehicle/engine/pz4/full"}
    {link_sound "exhaust"       "vehicle/engine/pz4/exhaust"}
    {link_sound "move"          "vehicle/tracks/pz4"}
    {link_sound "rotate_turret" "vehicle/turret/gun/gun_horizontal"}
    {link_sound "open"          "vehicle/doors/pz4/open"}
    {link_sound "close"         "vehicle/doors/pz4/close"}
    {link_sound "open_driver"   "vehicle/doors/pz4/open_driver"}
    {link_sound "close_driver"  "vehicle/doors/pz4/close_driver"}
  }
}
{"e-100 tank"
  ("pz6b_sound")
  {on "commander_hatch_open" overload
    {ani_wind "open" end}
    {ani_play "mgun_aa" +1.0 resume}
  }
  {on "commander_hatch_close" overload
    {ani_play "open" -1.0 resume}
    {ani_play "mgun_aa" -1.0 resume}
  }
}
