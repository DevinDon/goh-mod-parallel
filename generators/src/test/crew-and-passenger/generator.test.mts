import { equal } from 'node:assert';
import { it } from 'node:test';
import { generateCrewAndPassenger } from '../../crew-and-passenger/generators/generator.mjs';
import options from '../../crew-and-passenger/options/bmw-r71.mjs';

const want = `; crew and passenger

; set visors
{Sensor
  ; visor main
  {Visor "main"
    {Bone "foresight1"}
    {Vision "standard-vision-none"}
  }
  ; visor around
  {Visor "around"
    {Bone "visor1"}
    {Vision "standard-vision-none"}
  }
  ; visor driver
  {Visor "driver"
    {Bone "visor2"}
    {Vision "standard-vision-none"}
  }
  ; visor standard-visor-driver
  {Visor "standard-visor-driver"
    {Bone "driver"}
    {Vision "standard-vision-around"}
  }
  ; visor standard-visor-gunner
  {Visor "standard-visor-gunner"
    {Bone "gunner"}
    {Vision "standard-vision-medium"}
  }
}

; set animations
{Boarder
  ; animation driver
  {Anm "driver"
    {forward
      {base "doorleft1" 1}
      {begin "board_moto_driver" 1}
      {end "pose_moto_driver" 1}
    }
    {reverse
      {base "doorleft1" -1}
      ; no reverse animation begin
      {end "board_moto_driver" -1}
    }
  }
  ; animation gunner
  {Anm "gunner"
    {forward
      ; no forward animation base
      {begin "board_moto_sidecar" 1}
      {end "pose_moto_sidecar" 1}
    }
    {reverse
      ; no reverse animation base
      ; no reverse animation begin
      {end "board_moto_sidecar" -1}
    }
  }
  ; animation passenger
  {Anm "passenger"
    {forward
      ; no forward animation base
      {begin "board_moto_passenger" 1}
      {end "pose_moto_passenger" 1}
    }
    {reverse
      ; no reverse animation base
      ; no reverse animation begin
      {end "board_moto_passenger" -1}
    }
  }
}

; set crews
; crew driver
{Placer
  {Place "driver"
    {group "crew"}
    {linkbone "driver"}
    {turnoff {shadow} {sensor}}
    {visor "standard-visor-driver"}
    ; no extra
  }
}
{Boarder
  {door "emit1"}
  {link "emit1" "driver" {anm "driver"} {forward putoff} {reverse puton}}
}
; crew gunner
{Placer
  {Place "gunner"
    {group "crew"}
    {linkbone "gunner"}
    {turnoff {shadow} {sensor}}
    {visor "standard-visor-gunner"}
    ; no extra
  }
}
{Boarder
  {door "emit2"}
  {link "emit2" "gunner" {anm "gunner"} {forward putoff} {reverse puton}}
}

; set passengers
; passenger passenger
{Placer
  {Place "passenger"
    {group "passenger"}
    {linkbone "seat1"}
    {turnoff {shadow} {sensor}}
    ; no extra
  }
}
{Boarder
  {door "emit3"}
  {link "emit3" "passenger" {anm "passenger"} {forward putoff} {reverse puton}}
}

; set extra
; no extra
`;

it('generate crew and passenger', () => {
  const output = generateCrewAndPassenger(options);
  equal(output, want);
});
