import { equal } from 'node:assert';
import { it } from 'node:test';
import { generateCrewAndPassenger } from '../../crew-and-passenger/generators/generator.mjs';
import options from '../../crew-and-passenger/options/bmw-r71.mjs';

const output = `; crew and passenger

; set visors
{Sensor
  ; visor driver
  {Visor "driver"
    {Bone "driver"}
    {Vision "standard-vision-around"}
  }
  ; visor gunner
  {Visor "gunner"
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
      ; no backward animation begin
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
      ; no backward animation base
      ; no backward animation begin
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
      ; no backward animation base
      ; no backward animation begin
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
    {turnoff {shadow} {sensor} {targetable 1}}
    {visor "driver"}
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
    {turnoff {shadow} {sensor} {targetable 1}}
    {visor "gunner"}
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
    {turnoff {shadow} {sensor} {targetable 1}}
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
  const weapon = generateCrewAndPassenger(options);
  equal(weapon, output);
});
