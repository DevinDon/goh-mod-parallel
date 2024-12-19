{easy
  {unitset
    {value %period}
  }
  {balancingFactorBonus
    {cp 1.0}
    {mpStart 0.8}
    {mpFinish 0.8}
    {payback 0.8}
    {chargeDelay 1.0}  ;// adjusts the inital delay only
    {charge 1.0}    ;// adjusts the interval only
  }
  {unitScore 1.0}
}
{normal
  {unitset
    {value %period}
  }
  {balancingFactorBonus
    {cp 1.0}
    {mpStart 1.0}
    {mpFinish 1.0}
    {payback 1.0}
    {chargeDelay 1.0}  ;// adjusts the inital delay only
    {charge 1.0}    ;// adjusts the interval only
  }
  {unitScore 1.0}
}
{hard
  {unitset
    {value %period}
  }
  {balancingFactorBonus
    {cp 1.0}
    {mpStart 2.0}
    {mpFinish 2.0}
    {payback 2.0}
    {chargeDelay 1.0}  ;// adjusts the inital delay only
    {charge 1.0}    ;// adjusts the interval only
  }
  {unitScore 1.0}
}
{heroic
  {unitset
    {value %period}
  }
  {balancingFactorBonus
    {cp 1.0}
    {mpStart 10.0}
    {mpFinish 10.0}
    {payback 10.0}
    {chargeDelay 1.0}  ;// adjusts the inital delay only
    {charge 1.0}    ;// adjusts the interval only
  }
  {unitScore 1.0}
}
