Purchases["late.inf"] = {
  {
    Repeat = 0,
    Units = {
      -- 班
      {priority = 1.0, type = {"Class3", "Infantry", "Team",}, unit = "soldier-assault-squad(inf)"},
      {priority = 1.0, type = {"Class3", "Infantry", "Team",}, unit = "soldier-engineer-squad(inf)"},
      {priority = 1.0, type = {"Class3", "Infantry", "Team",}, unit = "soldier-medic-squad(inf)"},
      {priority = 2.0, type = {"Class3", "Infantry", "Team",}, unit = "soldier-sniper-squad(inf)"},
      {priority = 2.0, type = {"Class3", "Infantry", "Team",}, unit = "soldier-machine-gun-squad(inf)"},
      {priority = 2.0, type = {"Class3", "Infantry", "Team",}, unit = "soldier-antiarmor-squad(inf)"},
      {priority = 2.0, type = {"Class3", "Infantry", "Team",}, unit = "soldier-officer-squad(inf)"},
      -- 排
      {priority = 2.0, type = {"Class1", "Infantry", "Squad",}, unit = "soldier-assault-platoon(inf)"},
      {priority = 2.0, type = {"Class1", "Infantry", "Squad",}, unit = "soldier-supply-platoon(inf)"},
      {priority = 2.0, type = {"Class1", "Infantry", "Squad",}, unit = "soldier-defence-platoon(inf)"},
      -- 卡车
      -- {priority = 1.0, type = {"Class", "Vehicle", "Unarmed", "Transport",},          unit = "sdkfz-305-1"},
      {priority = 1.0, type = {"Class1", "Vehicle", "AA",},                           unit = "sdkfz-305-2"},
      -- {priority = 1.0, type = {"Class", "Vehicle", "Unarmed", "Supply", "Ammo",},     unit = "sdkfz-305-3"},
      -- {priority = 1.0, type = {"Class", "Vehicle", "Unarmed", "Supply", "Fuel",},     unit = "sdkfz-305-4"},
      -- {priority = 1.0, type = {"Class", "Vehicle", "Unarmed", "Supply", "Engineer",}, unit = "sdkfz-305-5"},
      -- 轮式装甲车
      {priority = 1.0, type = {"Class2", "Armored", "AA",}, unit = "sdkfz-234-1"},
      {priority = 1.0, type = {"Class2", "Armored", "AT",}, unit = "sdkfz-234-2"},
      -- {priority = 1.0, type = {"Class2", "Armored", "AT",}, unit = "sdkfz-234-3"},
      -- {priority = 1.0, type = {"Class2", "Armored", "AT",}, unit = "sdkfz-234-4"},
      -- 履带式装甲车
      -- {priority = 1.0, type = {"Class3", "Armored", "MG", "Transport",}, unit = "sdkfz-251-1"},
      {priority = 1.0, type = {"Class3", "Armored", "MG",},              unit = "sdkfz-251-16"},
      {priority = 1.0, type = {"Class3", "Armored", "AA",},              unit = "sdkfz-251-17"},
      {priority = 1.0, type = {"Class3", "Armored", "AA",},              unit = "sdkfz-251-21"},
      -- {priority = 1.0, type = {"Class3", "Armored", "AT",},              unit = "sdkfz-251-22"},
      -- 自行火炮 / 自行榴弹炮
      {priority = 1.0, type = {"Class2", "Tank", "Light", "Artillery",}, unit = "sdkfz-124"},
      -- 坦克
      {priority = 1.0, type = {"Class2", "Tank", "Medium",}, unit = "panzer-4-h"},
      {priority = 1.0, type = {"Class2", "Tank", "Medium",}, unit = "panzer-4-j"},
      {priority = 1.0, type = {"Class2", "Tank", "Medium",}, unit = "panzer-5-a"},
      {priority = 1.0, type = {"Class2", "Tank", "Medium",}, unit = "panzer-5-g"},
      {priority = 1.0, type = {"Class3", "Tank", "Heavy",},  unit = "panzer-6-e"},
      {priority = 1.0, type = {"Class3", "Tank", "Heavy",},  unit = "panzer-6-h"},
      {priority = 1.0, type = {"Class3", "Tank", "Heavy",},  unit = "panzer-6-b-h"},
      {priority = 1.0, type = {"Class3", "Tank", "Heavy",},  unit = "panzer-6-b-p"},
      -- 学说
      -- 无尽重装军团
      -- {priority = 1.0, type = {"Class3", "Doctrine", "Tier1", "Tank", "Medium", "Artillery"}, unit = "pzh2000"},
      {priority = 1.0, type = {"Class3", "Doctrine", "Tier2", "Tank", "Medium",}, unit = "panzer-5-d-ace"},
      {priority = 1.0, type = {"Class3", "Doctrine", "Tier2", "Tank", "Heavy",}, unit = "panzer-6-e-ace"},
      {priority = 1.0, type = {"Class3", "Doctrine", "Tier2", "Tank", "Heavy",}, unit = "panzer-6-b-h-ace"},
    },
  },
}
