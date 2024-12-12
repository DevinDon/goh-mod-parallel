import { ProjectModConfigDir } from '../../../utils/constants.mjs';
import { type WeaponOptions } from '../../options.mjs';

const options: WeaponOptions = {

  destination: `${ProjectModConfigDir}/49-inf/resource/set/stuff/standard/sniper/inf-infantry-bolt-action-sniper-rifle.weapon`,

  name: 'inf-infantry-bolt-action-sniper-rifle',
  description: '栓动狙击步枪',

  entity: 'k98_scope',
  mass: 3.9,

  from: 'pattern standard-sniper',

  tags: [ 'bolt_action' ],

  fireSound: 'smallarms/s3/d1/GER/K98k/',
  fireSoundClose: 'smallarms/s3/3p/GER/K98k/',
  reloadSound: 'weapon_reload_loose_rifle_cartridges',
  cursor: 'ironsights/rifle',

  ammo: 'inf-10mm-clip',
  amout: 5,
  calibre: 10,
  syncedProjectiles: true,

  aimingTolerance: 0.05,
  spreadTolerance: 0.5,

  rechargeTime: 5,
  recoveryTime: 60 / 50,

  automatic: false,

  bullets: [
    {
      name: 'ap',
      minRange: 0,
      maxRange: 1000,
      speed: 1000,
      gravity: 5,
      projectile: {
        nearest: 15,
        farthest: 3,
      },
      damageToArmor: 10,
      damageToHuman: 200,
      spreading: {
        radiusTable: {
          nearest: 0.2,
          farthest: 5,
        },
        burstRecoveryTime: 0.1,
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
