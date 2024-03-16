; args = amount
(define "set-self-resupply"
  {extender "supply_zone"
    {resupply
      ; general
      {Item "dynamite-x3" 1 {value  9}}
      {Item "dynamite-x7" 1 {value 21}}
      ; ger
      {Item "ger-fuel"   "ic"          "ammo" 100 {Value 50}}
      {Item "ger-mgun"   "api"         "ammo" 100 {Value 15}}
      {Item "ger-rifle"  "clip"        "ammo"   5 {Value  1}}
      {Item "ger-sniper" "clip"        "ammo"   5 {Value  2}}
      {Item "ger-stg44"  "magazine"    "ammo"  30 {Value  7}}
      {Item "ger-panzershreck" "heat"  "ammo"   1 {Value  8}}
      {Item "ger-20l55"  "ap"          "ammo"  40 {Value 80}}
      {Item "ger-20l55"  "apcr"        "ammo"  40 {Value 80}}
      {Item "ger-20l55"  "he"          "ammo"  40 {Value 80}}
      {Item "ger-30l38"  "apcr"        "ammo"  30 {Value 90}}
      {Item "ger-30l38"  "he"          "ammo"  30 {Value 90}}
      {Item "ger-37l45"  "aphe"        "ammo"   5 {Value 20}}
      {Item "ger-37l45"  "apcr"        "ammo"   5 {Value 20}}
      {Item "ger-37l45"  "he"          "ammo"   5 {Value 20}}
      {Item "ger-50l60"  "apche"       "ammo"   3 {Value 15}}
      {Item "ger-50l60"  "apcr"        "ammo"   3 {Value 15}}
      {Item "ger-50l60"  "heat"        "ammo"   3 {Value 15}}
      {Item "ger-50l60"  "he"          "ammo"   3 {Value 15}}
      {Item "ger-75l24"  "apcbche"     "ammo"   1 {Value  7}}
      {Item "ger-75l24"  "heat"        "ammo"   1 {Value  7}}
      {Item "ger-75l24"  "he"          "ammo"   1 {Value  7}}
      {Item "ger-75l24"  "sm"          "ammo"   1 {Value  7}}
      {Item "ger-75l43"  "apcbche"     "ammo"   1 {Value  7}}
      {Item "ger-75l43"  "apcr"        "ammo"   1 {Value  7}}
      {Item "ger-75l43"  "heat"        "ammo"   1 {Value  7}}
      {Item "ger-75l43"  "he"          "ammo"   1 {Value  7}}
      {Item "ger-75l70"  "apcbche"     "ammo"   1 {Value  7}}
      {Item "ger-75l70"  "apcr"        "ammo"   1 {Value  7}}
      {Item "ger-75l70"  "he"          "ammo"   1 {Value  7}}
      {Item "ger-88l56"  "apcbche"     "ammo"   1 {Value  8}}
      {Item "ger-88l56"  "apcr"        "ammo"   1 {Value  8}}
      {Item "ger-88l56"  "he"          "ammo"   1 {Value  8}}
      {Item "ger-88l71"  "apcbche"     "ammo"   1 {Value  8}}
      {Item "ger-88l71"  "apcr"        "ammo"   1 {Value  8}}
      {Item "ger-88l71"  "he"          "ammo"   1 {Value  8}}
      {Item "ger-105l28" "aphe"        "ammo"   1 {Value 10}}
      {Item "ger-105l28" "heat"        "ammo"   1 {Value 10}}
      {Item "ger-105l28" "he"          "ammo"   1 {Value 10}}
      {Item "ger-105l68" "apcbche"     "ammo"   1 {Value 10}}
      {Item "ger-105l68" "apcr"        "ammo"   1 {Value 10}}
      {Item "ger-105l68" "he"          "ammo"   1 {Value 10}}
      {Item "ger-128l61" "apcbche"     "ammo"   1 {Value 12}}
      {Item "ger-128l61" "he"          "ammo"   1 {Value 12}}
      {Item "ger-150l11" "heat"        "ammo"   1 {Value 15}}
      {Item "ger-150l11" "he"          "ammo"   1 {Value 15}}
      {Item "ger-150l12" "heat"        "ammo"   1 {Value 15}}
      {Item "ger-150l12" "he"          "ammo"   1 {Value 15}}
      {Item "ger-150l30" "heat"        "ammo"   1 {Value 15}}
      {Item "ger-150l30" "he"          "ammo"   1 {Value 15}}
      {Item "ger-150l38" "apcbche"     "ammo"   1 {Value 15}}
      {Item "ger-150l38" "heat"        "ammo"   1 {Value 15}}
      {Item "ger-150l38" "he"          "ammo"   1 {Value 15}}
      {Item "ger-280mm-nebelwerfer" "he" "ammo" 1 {Value 38}}
      {Item "ger-380mm-rw61-l5"        "ammo"   1 {Value 38}}
      {Item "ger-600l8"  "he"          "ammo"   1 {Value 60}}
      ; usa
      {Item "usa-hmgun"   "api"     "ammo" 100 {Value 30}}
      {Item "usa-37"      "apcbc"   "ammo"   1 {Value  3}}
      {Item "usa-37"      "he"      "ammo"   1 {Value  3}}
      {Item "usa-75x272"  "he"      "ammo"   1 {Value  7}}
      {Item "usa-75x272"  "heat"    "ammo"   1 {Value  7}}
      {Item "usa-75x272"  "wp"      "ammo"   1 {Value  7}}
      {Item "usa-75x350"  "apcbche" "ammo"   1 {Value  7}}
      {Item "usa-75x350"  "he"      "ammo"   1 {Value  7}}
      {Item "usa-75x350"  "wp"      "ammo"   1 {Value  7}}
      {Item "usa-76x539"  "apcbche" "ammo"   1 {Value  7}}
      {Item "usa-76x539"  "he"      "ammo"   1 {Value  7}}
      {Item "usa-76x539"  "hvap"    "ammo"   1 {Value  7}}
      {Item "usa-76x539"  "wp"      "ammo"   1 {Value  7}}
      {Item "usa-90x600"  "apbc"    "ammo"   1 {Value  9}}
      {Item "usa-90x600"  "apcbche" "ammo"   1 {Value  9}}
      {Item "usa-90x600"  "he"      "ammo"   1 {Value  9}}
      {Item "usa-90x600"  "hvap"    "ammo"   1 {Value  9}}
      {Item "usa-90x1270" "apcbche" "ammo"   1 {Value  9}}
      {Item "usa-90x1270" "he"      "ammo"   1 {Value  9}}
      {Item "usa-90x1270" "hvap"    "ammo"   1 {Value  9}}
      {Item "usa-mortar-81" "he"    "ammo"   1 {Value  8}}
      {Item "usa-114mm-m8"          "ammo"   3 {Value 10}}
    }
    {radius 20} ; resupply radius in meter
    {resupplyPeriod 2} ; resupply period in seconds
    {regenerationPeriod 0} ; regeneration period in seconds, +1 supply every x seconds (0 = no regeneration)
    {limit %amount} ; max number of resupplies (0 = unlimited)
  }
  {DecalView supply_zone
    {Sprite "supply-zone.ebm"
      {Visibility 0.25}
    }
    {Layer grounddynamic}
    {Visible 0}
  }
)
