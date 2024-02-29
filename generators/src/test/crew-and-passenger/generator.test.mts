import { equal } from 'node:assert';
import { it } from 'node:test';
import { generateCrewAndPassenger } from '../../crew-and-passenger/generators/generator.mjs';
import options from '../../crew-and-passenger/options/bmw-r71.mjs';

const output = `; crew and passenger

; set visors
{Sensor
  {Visor "driver"
    {Bone "driver"}
    {Vision "standard-vision-around"}
  }
  {Visor "gunner"
    {Bone "gunner"}
    {Vision "standard-vision-medium"}
  }
}

; set animations
{Boarder
  {Anm "driver"
    {forward
      {base "driver" 1}
      {begin "board_moto_driver" 1}
      {end "pose_moto_driver" 1}
    }
    {reverse
      {base "driver" -1}
      {end "board_moto_driver" -1}
    }
  }
  {Anm "gunner"
    {forward
      ; no forward animation base
      {begin "board_moto_sidecar" 1}
      {end "pose_moto_sidecar" 1}
    }
    {reverse
      ; no backward animation base
      {end "board_moto_sidecar" -1}
    }
  }
  {Anm "passenger"
    {forward
      ; no forward animation base
      {begin "board_moto_passenger" 1}
      {end "pose_moto_passenger" 1}
    }
    {reverse
      ; no backward animation base
      {end "board_moto_passenger" -1}
    }
  }
}

; set crews
{Placer
  {Place "driver"
    {group "crew"}
    {linkbone "driver"}
    {turnoff {shadow} {sensor} {targetable 1}}
    {visor "driver"}
  }
}
{Boarder
  {door "emit1"}
  {link "emit1" "driver" {anm "driver"} {forward putoff} {reverse puton}}
}
{Placer
  {Place "gunner"
    {group "crew"}
    {linkbone "gunner"}
    {turnoff {shadow} {sensor} {targetable 1}}
    {visor "gunner"}
  }
}
{Boarder
  {door "emit2"}
  {link "emit2" "gunner" {anm "gunner"} {forward putoff} {reverse puton}}
}

; set passengers
{Placer
  {Place "passenger"
    {group "passenger"}
    {linkbone "seat1"}
    {turnoff {shadow} {sensor} {targetable 1}}
  }
}
{Boarder
  {door "emit3"}
  {link "emit3" "passenger" {anm "passenger"} {forward putoff} {reverse puton}}
}
`;

it('generate crew and passenger', () => {
  const weapon = generateCrewAndPassenger(options);
  equal(weapon, output);
});
