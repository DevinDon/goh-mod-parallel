; define from vehicle2
; args = vehicle cost cd ci cw cp tags period side crew1 crew2 group button
(define "set-standard-vehicle"
  {charge
    {delay %cd}
    {interval %ci}
  }
  {tags "all %tags %side %period"}
  {group "%group"}
  {button "%button"}
  {cost %cost}
  {score (* %cost 0.05)}
  {cw %cw}
  {cp %cp}
  {content "%vehicle ( mp/%side/%period/%crew1 mp/%side/%period/%crew2 )"}
  {squad_cost_factor 1}
  {round_multiple 5.0}
)

; {"panzer5a"
;   ("set-standard-vehicle" vehicle(panzer5a) cost(1000) cd(540)  ci(60) cw(6) cp(0) tags(medium) period(late) side(ger) crew1(tank_commander:1) crew2(tankman:4) group(heavy1) button(tanks))
; }
; {"panzer5d"
;   ("set-standard-vehicle" vehicle(panzer5d) cost(1100) cd(600)  ci(60) cw(6) cp(0) tags(medium) period(late) side(ger) crew1(tank_commander:1) crew2(tankman:4) group(heavy1) button(tanks))
; }
; {"panzer5g"
;   ("set-standard-vehicle" vehicle(panzer5g) cost(1200) cd(660)  ci(60) cw(6) cp(0) tags(medium) period(late) side(ger) crew1(tank_commander:1) crew2(tankman:4) group(heavy1) button(tanks))
; }
; {"tiger1e"
;   ("set-standard-vehicle" vehicle(tiger1e)  cost(1500) cd(840)  ci(90) cw(7) cp(0) tags(heavy)  period(late) side(ger) crew1(tank_commander:1) crew2(tankman:4) group(heavy2) button(tanks))
; }
; {"tiger1h"
;   ("set-standard-vehicle" vehicle(tiger1h)  cost(1600) cd(900)  ci(90) cw(7) cp(0) tags(heavy)  period(late) side(ger) crew1(tank_commander:1) crew2(tankman:4) group(heavy2) button(tanks))
; }
; {"tiger2p"
;   ("set-standard-vehicle" vehicle(tiger2p)  cost(2150) cd(1250) ci(90) cw(8) cp(0) tags(heavy)  period(late) side(ger) crew1(tank_commander:1) crew2(tankman:4) group(heavy3) button(tanks))
; }
; {"tiger2h"
;   ("set-standard-vehicle" vehicle(tiger2h)  cost(2300) cd(1350) ci(90) cw(8) cp(0) tags(heavy)  period(late) side(ger) crew1(tank_commander:1) crew2(tankman:4) group(heavy3) button(tanks))
; }

; custom E-Series Doctrine
; define from squad_vehicle2_doctrine
; args = vehicle side period crew1 crew2
(define "set-standard-doctrine-vehicle"
  {level 1}
  {research_stage 1}
  {squad_cost_factor 0}
  {tags "all doctrine %side %period"}
  {button "doctrine"}
  {content "%vehicle ( mp/%side/%period/%crew1 mp/%side/%period/%crew2 )"}
)

; args = doctrine cost
(define "set-standard-doctrine-level-1"
  {charge
    {delay 300}
    {interval 120}
  }
  {group "doctrine_t1"}
  {doctrine %doctrine}
  {cost %cost}
  {score (* %cost 0.05)}
)

; args = doctrine cost
(define "set-standard-doctrine-level-2"
  {charge
    {delay 900}
    {interval 180}
  }
  {group "doctrine_t2"}
  {doctrine %doctrine}
  {cost %cost}
  {score (* %cost 0.05)}
)

; args = doctrine cost
(define "set-standard-doctrine-level-3"
  {charge
    {delay 1500}
    {interval 240}
  }
  {group "doctrine_t3"}
  {doctrine %doctrine}
  {cost %cost}
  {score (* %cost 0.05)}
)

; args = doctrine cost
(define "set-standard-doctrine-level-4"
  {charge
    {delay 1800}
    {interval 300}
  }
  {group "doctrine_t3"}
  {doctrine %doctrine}
  {cost %cost}
  {score (* %cost 0.05)}
)

{"standard-doctrine-e-25"
  ("set-standard-doctrine-vehicle" vehicle(e-25) side(ger) period(late) crew1(tank_commander:1) crew2(tankman:3))
  ("set-standard-doctrine-level-1" doctrine(late_ger_e_series) cost(25))
}

{"standard-doctrine-e-50"
  ("set-standard-doctrine-vehicle" vehicle(e-50) side(ger) period(late) crew1(tank_commander:1) crew2(tankman:4))
  ("set-standard-doctrine-level-2" doctrine(late_ger_e_series) cost(50))
}

{"standard-doctrine-e-75"
  ("set-standard-doctrine-vehicle" vehicle(e-75) side(ger) period(late) crew1(tank_commander:1) crew2(tankman:4))
  ("set-standard-doctrine-level-3" doctrine(late_ger_e_series) cost(75))
}

{"standard-doctrine-e-100"
  ("set-standard-doctrine-vehicle" vehicle(e-100) side(ger) period(late) crew1(tank_commander:1) crew2(tankman:4))
  ("set-standard-doctrine-level-4" doctrine(late_ger_e_series) cost(100))
}
