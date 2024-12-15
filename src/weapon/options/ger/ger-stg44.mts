import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/19-germany/resource/set/stuff/standard/rifle/ger-stg44.weapon`,

  name: 'ger-stg44',
  description: '德国 StG44 突击步枪',

  entity: 'stg44_scope',
  mass: 4.6,

  from: 'pattern standard-rifle',

  tags: [ '-rifle', 'smg', 'inter_shell', 'assaultrifle', 'autorifle_sup', 'auto_eject' ],

  fireSound: 'smallarms/s2/d1/GER/StG44/',
  fireSoundClose: 'smallarms/s2/3p/GER/StG44/',
  reloadSound: 'stg',
  cursor: 'ironsights/rifle',

  ammo: 'ger-stg44 magazine',
  amout: 30,
  caliber: 7.92,
  syncedProjectiles: true,

  aimingTolerance: 1,
  spreadTolerance: 0.5,

  rechargeTime: 4,
  recoveryTime: 60 / 500,

  automatic: true,

  burst: {
    'short': {
      standard: 3,
      random: 1,
    },
    'long': {
      standard: 5,
      random: 1,
    },
    rangeKoef: 0.5,
  },

  bullets: [
    {
      name: 'magazine',
      minRange: 0,
      maxRange: 600,
      speed: 685,
      gravity: 5,
      projectile: {
        nearest: 6,
        farthest: 2,
      },
      damageToArmor: 4,
      damageToHuman: 125,
      spreading: {
        radiusTable: {
          nearest: 0.5,
          farthest: 3.9,
        },
        burstRecoveryTime: 0.1,
        burstAccuracy: 100,
        spreadPower: 1.55,
        spreadXYRatio: 0.85,
      },
      overmatch: 'ger-rifle',
    },
  ],

  extra: [
    `; 第三人称配置
{Thirdpersonparams inherit "human default"
  {level 1
    {distanceset 0}
    {distance 35}  ; activation distance
    {delta 20}
    {linkBone "head"}

    {zoom}
    {vision_modes_active}
    {vignette_recoil 2.75 1.1} ; speed, scale
    {vignette_fade_speed 5} ; factoring the speed at which the vignette fades in/out
    {drop_zoom_on_reload}
    {blur_strength 10}
    {mouse_speed_factor 0.6}
    {ManualAccuracyZoom}

    {camera "human_zoom4"} ; magnification x4
    {scope_vignette "/texture/common/environment/lens_effects/zoom_vignette_scope_ger_k98"}
    {blur_mask "/texture/common/environment/lens_effects/zoom_vignette_scope_01_mask"}
    {bump_spec_mask "/texture/common/environment/lens_effects/zoom_vignette_scope_ger_k98"}
    {refraction_mask "/texture/common/environment/lens_effects/zoom_vignette_scope_01_bp"}
    {lens_dirt_mask "/texture/common/environment/lens_effects/dirty_lens_scope_01"}
    {vignette_gloss 10}
    {offset 35 2.25 0.75}
    {hide_weapon 1}
    {with_owner
      {viewoff "skin"}
    }
    {with_weapon
      {viewon "foresight3"}
    }
    {hide_crosshair}
    {weapon_sway_active}
    {aimer_type "sniper"}
  }
}
`,
  ],

};

export default options;
