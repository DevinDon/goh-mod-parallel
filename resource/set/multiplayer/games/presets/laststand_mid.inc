; == mid WAR STANDARD RESOURCES ==
(define "standard_all"
  {teams
    {a ;// PLAYER DEFENDER TEAM
      {unitset
        {value "mid^conquestonly|doctrineonly"}
      }
      {commandPoints "*=%cp_a"}
      (include "global_parameters/unitlimits.inc")
      {chargeFactors
        {value "*=1.00"}
      }
      {balancingFactorBonus  ;// only affects players on team A (not bots)
        {chargeDelay 1}    ;// adjusts the inital delay only
        {charge 1.0}    ;// adjusts the interval only
      }
      (include "global_parameters/last_stand/budget_defender.inc" s(%start_a) f(%finish_a) d(%doctrine))
    }
    {b ;// AI ATTACKER TEAM
      {unitset
        {value "mid^conquestonly|doctrineonly"}
      }
      {commandPoints "*=%cp_b"}
      (include "global_parameters/unitlimits.inc")
      {chargeFactors
        {value "*=1.00"}
      }
      (include "global_parameters/last_stand/budget_attacker.inc" s(%start_b) f(%finish_b) d(%doctrine))
    }
  }

  {bots
    (include "global_parameters/last_stand/bots_standard.inc" period("mid") start_a(%start_a) finish_a(%finish_a) start_b(%start_b) finish_b(%finish_b) doctrine(%doctrine) cp_a(%cp_a) cp_b(%cp_b))
  }
)

;------------------------------------------------------------------------------------------------------------
{presets
  {"s:mid_standard_100"
    {gameMode "standard"}
    {unitMode "mid"}
    {specMode "all_normal"}
    {apply "only_roster_mid"}
    ("standard_all" start_a(1000) finish_a(20000) start_b(2000) finish_b(40000) doctrine(1000) cp_a(0:100,2000:100,5000:100) cp_b(0:200,2000:200,10000:200))
    {ranked}
  }
;------------------------------------------------------------------------------------------------------------

; // custom games here

;------------------------------------------------------------------------------------------------------------
}
