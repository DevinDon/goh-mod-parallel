; Vision abilities for use with sniper rifles and binoculars

(define "standard_vision"
  {"vision" standard-vision-human}
)

(define "elite_vision"
  {"vision" standard-vision-human-elite}
)

(define "recon_vision"
  {"vision" standard-vision-human-recon}
)

(define "sniper_vision"
  {"telescope"}
  {"aimedshot"}
  {"vision" standard-vision-human-sniper}
)

(define "binocular_vision"
  {"field_glass"}
  {"vision" standard-vision-human-elite}
)
