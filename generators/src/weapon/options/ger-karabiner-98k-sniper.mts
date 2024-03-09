import type { WeaponOptions } from '../options.mjs';

const options: WeaponOptions = {

  destination: 'resource/set/stuff/standard/sniper/ger-karabiner-98k-sniper.weapon',

  name: 'ger-karabiner-98k-sniper',
  description: '德国 Karabiner 98k 栓动狙击步枪',

  entity: 'k98_scope',
  mass: 3.9,

  from: 'pattern standard-sniper',

  tags: [ 'bolt_action' ],

  fireSound: 'smallarms/s3/d1/GER/K98k/',
  fireSoundClose: 'smallarms/s3/3p/GER/K98k/',
  reloadSound: 'weapon_reload_loose_rifle_cartridges',
  cursor: 'ironsights/rifle',

  ammo: 'ger-sniper clip',
  amout: 5,
  calibre: 7.92,
  syncedProjectiles: true,

  aimingTolerance: 0.2,
  spreadTolerance: 0.5,

  rechargeTime: 4,
  recoveryTime: 60 / 50,

  automatic: false,

  bullets: [
    {
      name: 'clip',
      minRange: 0,
      aimRange: 250,
      maxRange: 250,
      speed: 760,
      gravity: 5,
      projectile: {
        nearest: 7,
        farthest: 3,
      },
      damageToArmor: 5,
      damageToHuman: 150,
      spreading: {
        radiusTable: {
          nearest: 0.1,
          farthest: 0.6,
          factor: 2.5,
        },
        burstRecoveryTime: 0.2,
        burstAccuracy: 100,
        spreadPower: 1.75,
        spreadXYRatio: 0.95,
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

    {camera "human_zoom8"} ; magnification x8
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
    {drop_zoom_after_shot}
    {aimer_type "sniper"}
  }
}
`,
  ],

};

export default options;
