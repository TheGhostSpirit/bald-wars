/**
 * Contains numerous utilities functions to get informations about the current state of the game.
 */
export interface Game {
  getEnemyDistance(): number;
  getEnemyPosition(): { x: number; y: number };
  getLastEnemyAction(): Action;
  getMapSize(): number;
}

/**
 * Contains informations about the character
 */
export interface Character {
  readonly hp: number;
  readonly x: number;
  readonly y: number;
}

export type ActionOutcome = Move | { char1: number; char2: number }

/**
 * Represents an action that can be chosen at any given turn.
 */
export type Action = CombatActions | Move;

export type Move = {
  x: number;
  y: number;
};

export enum CombatActions {
  MeleeAttack,
  RangedAttack,
  Heal,
}

/**
 * The character created by the user
 */
export interface MyCharacter {
  defense: number;
  melee: number;
  ranged: number;
  rangedMaxRange: number;
  movement: number;
  healingPotency: number;
  health: number;
  turn(game: Game, character: Character): Action;
}
