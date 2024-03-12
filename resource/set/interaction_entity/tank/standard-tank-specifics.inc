
{"e-100hd tank"
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
