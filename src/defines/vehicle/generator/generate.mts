import { logger } from '@pipers/logger';
import { saveGenerated, type GeneratedOptions } from '../../../utils/save-generated.mjs';
import { TankDurabilityPresets } from '../component/durability/tank.mjs';
import { PartPresets } from '../component/part/presets.mjs';
import { default as crewsAndPassengersOptions } from '../../../crew-and-passenger/options/panzer5d.mjs';
import { generateVehicle, type VehicleOptions } from './vehicle.mjs';
import { AccuracyByMotionPresets } from './weaponry.mjs';

/** 生成所有载具配置 */
export const generateAllVehicles = async () => {

  // 测试代码
  const options: VehicleOptions[] = [
    {
      metadata: {
        id: 'sdkfz-171',
        name: '五号坦克 A 型',
        category: 'tank',
        faction: 'ascension',
        country: 'inf',
      },
      type: 'medium-tank',
      selection: {
        type: 'normal',
        scale: 1.2,
      },
      extension: '/entity/-vehicle/germany/tank_medium/panzer5d/panzer5d.mdl',
      armor: {
        durability: TankDurabilityPresets.Level07,
        parts: PartPresets.Level07,
        shields: [
          { $options: 'shield', name: 'detail6', thickness: 30, tear: true },
          { $options: 'shield', name: 'detail7', thickness: 30, tear: true },
          { $options: 'shield', name: 'detail8', thickness: 30, tear: true },
          { $options: 'shield', name: 'fenderl', thickness: 9, tear: true },
          { $options: 'shield', name: 'fenderl2', thickness: 9, tear: true },
          { $options: 'shield', name: 'fenderl3', thickness: 9, tear: true },
          { $options: 'shield', name: 'fenderl4', thickness: 9, tear: true },
          { $options: 'shield', name: 'fenderl5', thickness: 9, tear: true },
          { $options: 'shield', name: 'fenderl6', thickness: 9, tear: true },
          { $options: 'shield', name: 'fenderl7', thickness: 9, tear: true },
          { $options: 'shield', name: 'fenderl8', thickness: 9, tear: true },
          { $options: 'shield', name: 'fenderr', thickness: 9, tear: true },
          { $options: 'shield', name: 'fenderr2', thickness: 9, tear: true },
          { $options: 'shield', name: 'shieldr3', thickness: 9, tear: true },
          { $options: 'shield', name: 'shieldr4', thickness: 9, tear: true },
          { $options: 'shield', name: 'shieldr5', thickness: 9, tear: true },
          { $options: 'shield', name: 'shieldr6', thickness: 9, tear: true },
          { $options: 'shield', name: 'shieldr7', thickness: 9, tear: true },
          { $options: 'shield', name: 'shieldr8', thickness: 9, tear: true },
        ],
        internals: [
          { type: 'ammo', name: 'ammo1', repair: 3 },
          { type: 'ammo', name: 'ammo2', repair: 3 },
          { type: 'ammo', name: 'ammo3', repair: 3 },
          { type: 'ammo', name: 'ammo4', repair: 3 },
          { type: 'fuel', name: 'fuel1', repair: 3 },
          { type: 'fuel', name: 'fuel2', repair: 3 },
          { type: 'fuel', name: 'fuel3', repair: 3 },
          { type: 'fuel', name: 'fuel4', repair: 3 },
          { type: 'transmission', name: 'transmission', repair: 20 },
        ],
        volumes: [
          { name: 'body1', thickness: { base: 40, front: 80, top: 80, rear: 16, bottom: 30 }, hardness: 1.25 },
          { name: 'body2', thickness: { base: 40, front: 100, top: 16, rear: 16, bottom: 16 }, hardness: 1.25, able: { holed: true } },
          { name: 'engine1', thickness: { base: 40, front: 16, top: 16, bottom: 16 }, hardness: 1.25 },
          { name: 'engine2', thickness: { base: 40, front: 16, top: 16, bottom: 16 }, hardness: 1.25 },
          { name: 'turret', thickness: { base: 45, front: 100, top: 17 }, hardness: 1.25 },
          { name: 'turret2', thickness: { base: 45, front: 100, top: 17, bottom: 100 }, hardness: 1.25 },
          { name: 'mantlet', thickness: { base: 100 }, component: 'turret', tags: [ 'turret' ], hardness: 1.25 },
          { name: 'mantlet2', thickness: { base: 100 }, component: 'gun', tags: [ 'gun' ], hardness: 1.25 },
          { name: 'cupola', thickness: { base: 80, top: 16 }, hardness: 1.25 },
          { name: 'cupola2', thickness: { base: 80, top: 16, bottom: 100 }, hardness: 1.25 },
        ],
      },
      crewsAndPassengers: crewsAndPassengersOptions,
      patherid: 'panzer5',
      collider: 'tank.heavy',
      targetClasses: [ 'tank_heavy' ],
      targetSelector: 'tank_heavy',
      props: [ 'medium', 'vision_lev04', 'muzzle_85mm_93mm_sides', 'shield', 'smoke', 'nwg', 'detect_tank_heavy' ],
      ables: [ 'emit_passengers_on_enemy' ],
      details: [
        'detail5',
        'detail2',
        'detail3',
        'detail4',
        'detail1',
        'detail6',
        'detail7',
        'detail8',
        'detail9',
        'detail10',
        'detail11',
        'detail13',
        'detail12',
        'detail14',
      ],
      shield: { on: true },
      smokescreen: {
        cooldown: 5,
        itemTags: 'grenade nbks',
      },
      inventory: {
        size: { width: 12, height: 10 },
        weight: 1000,
        items: [
          { name: 'repair_kit', amount: 10 },
          { name: 'ammo inf-10mm-chain ap', amount: 4500 },
          { name: 'nbks grenade', amount: 6 },
          { name: 'ammo ger-75l70 apcbche', amount: 39 },
          { name: 'ammo ger-75l70 apcr', amount: 5 },
          { name: 'ammo ger-75l70 he', amount: 29 },
        ],
      },
      weaponry: {
        weapons: [
          {
            place: 'gun',
            weapon: 'weapon ger-75mm-kwk42-l70',
            filling: 'ammo ger-75l70 apcbche',
            restoreIKAfterAim: true,
            amount: 1,
            gunner: 'gunner',
            charger: 'charger',
            basic: true,
            aiInManual: true,
            accuracyByMotion: AccuracyByMotionPresets.gun,
          },
          {
            place: 'mgun2',
            type: 'coaxial',
            weapon: 'weapon inf-infantry-general-purpose-machine-gun',
            filling: 'ammo inf-10mm-chain ap',
            amount: 240,
            foresight: 'foresight5',
            gunner: 'gunner',
            charger: 'charger',
            basic: true,
            aiInManual: true,
            accuracyByMotion: AccuracyByMotionPresets.mgun,
          },
          {
            place: 'mgun1',
            type: 'hull',
            weapon: 'weapon inf-infantry-general-purpose-machine-gun',
            filling: 'ammo inf-10mm-chain ap',
            amount: 240,
            foresight: 'foresight4',
            gunner: 'gunner3',
            charger: 'gunner3',
            basic: true,
            aiInManual: true,
            accuracyByMotion: AccuracyByMotionPresets.mgun,
          },
        ],
        limits: [
          {
            bone: 'gun_rot',
            limit: { bottom: -8, top: 20 },
            speed: 4,
          },
          {
            bone: 'turret',
            speed: 6,
          },
        ],
      },
      mobility: {
        traces: [
          {
            $options: 'tank-trace',
            fx: 'tracks_big',
            step: 0.47,
            length: 0.94,
            boneleft: 'FXtraceL1',
            boneright: 'FXtraceR1',
          },
        ],
        mobility: {
          $options: 'tank-mobility',
          mass: 45300,
          forward: 55,
          reverse: 4,
          power: 650,
          fuel: 700,
        },
      },
    },
  ];

  const generated: GeneratedOptions[] = options.map(
    option => {
      const destination = `mods/49-inf/resource/entity/-vehicle/${option.metadata.country}/${option.metadata.category}/${option.metadata.id}/${option.metadata.id}.def`;
      logger.info(`正在生成载具配置 "${destination}"`);
      return {
        destination,
        content: generateVehicle(option),
      };
    },
  );

  await saveGenerated(generated);

};
