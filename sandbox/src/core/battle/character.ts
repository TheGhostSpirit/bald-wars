import { Action, Character as ICharacter, Game as IGame, MyCharacter } from 'character-lib';

export class Character implements ICharacter {

  _x: number;
  _y: number;
  _hp: number;

  defense: number;
  melee: number;
  ranged: number;
  rangedMaxRange: number;
  movement: number;
  healingPotency: number;
  maxHp: number;
  turn: (game: IGame, character: ICharacter) => Action;

  get hp(): number {
    return this._hp;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  static fromMyCharacter(char: MyCharacter, x: number, y: number): Character {
    return Object.assign(new Character(), {
      ...char,
      maxHp: char.health,
      _hp: char.health,
      health: undefined,
      _x: x,
      _y: y
    });
  }

}
