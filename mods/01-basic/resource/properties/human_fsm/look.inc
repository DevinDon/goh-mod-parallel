;SDL

(define "peep_chain"
  {State "peep_%0_in"
    {condition "peep-%0-in"}
    {from "stand"}
    {to "peep_%0"}
    {tag "looking"}
    {tag "up"}
  }
  {State "peep_%0"
    {to "peep_%0_out"}
    {tag "peep-%0-in"}
    {tag "looking"}
    {tag "up"}
  }
  {State "peep_%0_out"
    {to "stand"}
    {tag "looking"}
    {tag "up"}
  }
)

("peep_chain" args left)
("peep_chain" args right)

(define "look_chain"
  {State "look_%0_in"
    {condition "look-%0-in"}
    {from "stand"}
    {to "look_%0"}
    {tag "looking"}
    {tag "up"}
    {tag "aim-thrower"}
    {tag "can-aim-thrower"}
  }
  {State "look_%0"
    {to "look_%0_fire"}
    {to "look_%0_throw_begin"}
    {to "look_%0_out"}
    {tag "look-%0-in"}
    {tag "hold-nothing"};;;;;;;
    {tag "looking"}
    {tag "up"}
    {tag "aim"}
    {tag "aim-thrower"}
    {tag "can-aim"}
    {tag "can-aim-bolt"}
    {tag "can-aim-thrower"}
    {tag "weapon"}
    {tag "aim-thrower"}
    {tag "can-aim"}
    {tag "can-aim-bolt"}
    {tag "can-aim-thrower"}
  }
  {State "look_%0_switch"
    {to "look_%0"}
    {tag "switch-weapon"}
    {tag "looking"}
    {tag "up"}
  }
  {State "look_%0_throw_begin"
    {transit "look_%0_throw_end"}
    {tag "throw"}
    {tag "looking"}
    {tag "up"}
    {tag "aim-thrower"}
    {tag "can-aim-thrower"}
  }
  {State "look_%0_throw_end"
    {transit "look_%0"}
    {tag "looking"}
    {tag "up"}
  }
  {State "look_%0_fire"
    {to "look_%0_recoil"}
    {tag "looking"}
    {tag "up"}
    {tag "fire"}
    {tag "weapon"}
  }
  {State "look_%0_recoil"
    {transit "look_%0"}
    {tag "looking"}
    {tag "up"}
    {tag "weapon"}
    {tag "recoil"}
  }
  {State "look_%0_out"
    {to "stand"}
    {tag "looking"}
    {tag "up"}
  }
)

("look_chain" args left)
("look_chain" args right)
("look_chain" args sleft)
("look_chain" args sright)
