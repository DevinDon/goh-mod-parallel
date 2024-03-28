Purchases["late.inf"] = {
  {
    Repeat = 0,
    Units = {
      -- 班
      {priority = 1.0, type = {"Class3", "Infantry", "Team",}, unit = "soldier-antitank-squad(inf)"},
      {priority = 1.0, type = {"Class3", "Infantry", "Team",}, unit = "soldier-engineer-squad(inf)"},
      {priority = 1.0, type = {"Class3", "Infantry", "Team",}, unit = "soldier-mgun-squad(inf)"},
      {priority = 1.0, type = {"Class3", "Infantry", "Team",}, unit = "soldier-officer-squad(inf)"},
      -- 排
      {priority = 2.0, type = {"Class1", "Infantry", "Squad",}, unit = "soldier-antitank-platoon(inf)"},
      {priority = 2.0, type = {"Class1", "Infantry", "Squad",}, unit = "soldier-engineer-platoon(inf)"},
      {priority = 2.0, type = {"Class1", "Infantry", "Squad",}, unit = "soldier-mgun-platoon(inf)"},
      -- 装甲车
      -- 坦克
      {priority = 1.5, type = {"Class", "Vehicle", "Unarmed", "Support", "Engineer",}, unit = "tank-ai-bomb"},
      {priority = 1.0, type = {"Class1", "Tank", "Light", "AT",}, unit = "tank-e-25"},
      {priority = 2.0, type = {"Class2", "Tank", "Medium",},      unit = "tank-e-50"},
      {priority = 2.0, type = {"Class3", "Tank", "Heavy",},       unit = "tank-e-75"},
      -- 学说
      -- 无尽重装军团
      {priority = 1.0, type = {"Class3", "Doctrine", "Tier3", "Tank", "Heavy",}, unit = "tank-e-100"},
    }
  }
}
