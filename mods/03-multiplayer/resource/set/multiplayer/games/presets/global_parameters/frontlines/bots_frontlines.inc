
;// ================ Team A "Attacker" ==================

{easy_a
  ("team_a")
  {balancingFactorBonus
    {cp 0.8}
    {mpStart 0.8}
    {mpFinish 0.8}
    {periodicFactor 1.0}
    {chargeDelay 1.0}  ;// adjusts the initial delay only
    {charge 1.0}    ;// adjusts the interval only
  }
}
{normal_a
  ("team_a")
  {balancingFactorBonus
    {cp 1.0}
    {mpStart 1.0}
    {mpFinish 1.0}
    {periodicFactor 1.0}
    {chargeDelay 1.0}  ;// adjusts the initial delay only
    {charge 1.0}    ;// adjusts the interval only
  }
}
{hard_a
  ("team_a")
  {balancingFactorBonus
    {cp 1.0}
    {mpStart 2.0}
    {mpFinish 2.0}
    {periodicFactor 2.0}
    {chargeDelay 1.0}  ;// adjusts the initial delay only
    {charge 1.0}    ;// adjusts the interval only
  }
}
{heroic_a
  ("team_a")
  {balancingFactorBonus
    {cp 3.0}
    {mpStart 10.0}
    {mpFinish 10.0}
    {periodicFactor 10.0}
    {chargeDelay 1.0}  ;// adjusts the initial delay only
    {charge 1.0}    ;// adjusts the interval only
  }
}



;// ================ Team B "Defender" ==================

{easy_b
  ("team_b")
  {balancingFactorBonus
    {cp 1.2}
    {mpStart 1.2}
    {mpFinish 1.2}
    {chargeDelay 1.0}  ;// adjusts the initial delay only
    {charge 1.0}    ;// adjusts the interval only
  }
}
{normal_b
  ("team_b")
  {balancingFactorBonus
    {cp 1.3}
    {mpStart 1.3}
    {mpFinish 1.3}
    {chargeDelay 1.0}  ;// adjusts the initial delay only
    {charge 1.0}    ;// adjusts the interval only
  }
}
{hard_b
  ("team_b")
  {balancingFactorBonus
    {cp 1.4}
    {mpStart 1.4}
    {mpFinish 1.4}
    {chargeDelay 1.0}  ;// adjusts the initial delay only
    {charge 1.0}    ;// adjusts the interval only
  }
}
{heroic_b
  ("team_b")
  {balancingFactorBonus
    {cp 5.0}
    {mpStart 10.0}
    {mpFinish 10.0}
    {chargeDelay 1.0}  ;// adjusts the initial delay only
    {charge 1.0}    ;// adjusts the interval only
  }
}
