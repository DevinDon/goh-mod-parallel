import { i0lines } from '../../../utils/formatter.mjs';

type SetMainWeaponOptions = {
  name: string;
  thickness: number;
  type: string;
};

const setMainWeapon = (options: SetMainWeaponOptions) => {

  const { name, type, thickness } = options;

  return i0lines(
    `{volume "${name}"`,
    `  {component "${type}"}`,
    `  {tags "no_target" "${type}"}`,
    `  {thickness ${thickness}}`,
    '  {able {Contact 0} {Visible 0} {Obstacle 0} {nolook 1}}',
    '}',
  );

};

export type SetGunOptions = {
  repair: number;
  thickness: number;
};

export const setGun = (options: SetGunOptions) => {

  const { repair, thickness } = options;

  return i0lines(
    setMainWeapon({ type: 'gun', name: 'gun', thickness }),
    setMainWeapon({ type: 'gun', name: 'gun1', thickness }),
    setMainWeapon({ type: 'gun', name: 'gun2', thickness }),
    setMainWeapon({ type: 'gun', name: 'gun3', thickness }),
    setMainWeapon({ type: 'gun', name: 'gun4', thickness }),
    setMainWeapon({ type: 'gun', name: 'gun5', thickness }),
    setMainWeapon({ type: 'gun', name: 'barrel', thickness }),
    setMainWeapon({ type: 'gun', name: 'barrel1', thickness }),
    setMainWeapon({ type: 'gun', name: 'barrel2', thickness }),
    setMainWeapon({ type: 'gun', name: 'barrel3', thickness }),
    setMainWeapon({ type: 'gun', name: 'barrel4', thickness }),
    setMainWeapon({ type: 'gun', name: 'barrel5', thickness }),
    setMainWeapon({ type: 'gun', name: 'barrel6', thickness }),
    setMainWeapon({ type: 'gun', name: 'barrel7', thickness }),
    setMainWeapon({ type: 'gun', name: 'barrel8', thickness }),
    setMainWeapon({ type: 'gun', name: 'barrel9', thickness }),
    setMainWeapon({ type: 'gun', name: 'barrel10', thickness }),
    setMainWeapon({ type: 'gun', name: 'breach', thickness: 2 }),
    setMainWeapon({ type: 'gun', name: 'breech', thickness: 2 }),
    '{component "gun"',
    `  {RepairTime ${repair}}`,
    '  {RepairOrder 1}',
    '}',
  );

};

export const setSecondaryGun = (options: SetGunOptions) => {

  const { repair, thickness } = options;

  return i0lines(
    setMainWeapon({ type: 'gun1', name: 'barrel11', thickness }),
    setMainWeapon({ type: 'gun1', name: 'barrel12', thickness }),
    setMainWeapon({ type: 'gun1', name: 'barrel13', thickness }),
    '{component "gun1"',
    `  {RepairTime ${repair}}`,
    '  {RepairOrder 1}',
    '}',
  );

};

export const setRocket = (name: string) => (
  i0lines(
    `{volume "${name}"`,
    '  {thickness 2}',
    '  {tags "rocket"}',
    '  {able {visible 0}{obstacle 0}}',
    `  {component "${name}"}`,
    '}',
    `{component "${name}"`,
    '  {RepairTime 1}',
    '  {tags "rocket"}',
    '  {RepairOrder 11}',
    '}',
  )
);
