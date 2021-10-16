import {
  Action,
  ActionOutcome,
  CombatActions,
  Game as IGame,
  Move
} from 'character-lib';

import { Character } from './character';

export class Game implements IGame {
  size = 10;
  turn: Character;
  actions: [Character, Action, ActionOutcome][] = [];
  winner: Character | null = null;

  get isFinished(): boolean {
    return this.winner !== null;
  }

  get enemy(): Character {
    return this.turn === this.characters[0]
      ? this.characters[1]
      : this.characters[0];
  }

  constructor(private characters: [Character, Character]) {
    [ this.turn ] = characters;
    this.actions.push(
      [
        this.characters[0],
        { x: this.characters[0].x, y: this.characters[0].y },
        { x: this.characters[0].x, y: this.characters[0].y }
      ],
      [
        this.characters[1],
        { x: this.characters[1].x, y: this.characters[1].y },
        { x: this.characters[1].x, y: this.characters[1].y }
      ]
    );
  }

  doMove(action: Action) {
    switch (action) {
      case CombatActions.Heal:
        this.turn._hp += Math.min(
          this.turn.maxHp - this.turn._hp,
          this.turn.healingPotency
        );
        this.actions.push([
          this.turn,
          action,
          { char1: this.characters[0].hp, char2: this.characters[1].hp }
        ]);
        break;
      case CombatActions.MeleeAttack:
        if (this.getEnemyDistance() === 1) {
          const attack = this.turn.melee - this.enemy.defense;
          this.enemy._hp -= (attack > 0 ? attack : 0);
        }
        this.actions.push([
          this.turn,
          action,
          { char1: this.characters[0].hp, char2: this.characters[1].hp }
        ]);
        break;
      case CombatActions.RangedAttack:
        if (this.playersAligned() && this.getEnemyDistance() <= this.turn.rangedMaxRange) {
          const attack = this.turn.ranged - this.enemy.defense;
          this.enemy._hp -= (attack > 0 ? attack : 0);
        }
        this.actions.push([
          this.turn,
          action,
          { char1: this.characters[0].hp, char2: this.characters[1].hp }
        ]);
        break;
      default: {
        const cur = action as Move;
        if (this.isWithinBoundaries(cur.x, cur.y)
          && this.isUnoccupied(cur.x, cur.y)
          && this.getDistance(this.turn.x, cur.x, this.turn.y, cur.y) <= this.turn.movement
        ) {
          this.turn._x = cur.x;
          this.turn._y = cur.y;
        }
        this.actions.push([
          this.turn,
          action,
          { x: this.turn.x, y: this.turn.y }
        ]);
      }
    }
    if (this.enemy.hp <= 0) {
      this.winner = this.turn;
    }
    this.switchTurn();
  }

  switchTurn(): void {
    this.turn = this.enemy;
  }

  playersAligned(): boolean {
    return this.turn.x === this.enemy.x || this.turn.y === this.enemy.y;
  }

  isUnoccupied(x: number, y: number): boolean {
    return (this.turn.x !== x || this.turn.y !== y)
      && (this.enemy.x !== x || this.enemy.y !== y);
  }

  getMapSize(): number {
    return this.size;
  }

  getEnemyPosition(): { x: number; y: number } {
    return { x: this.enemy.x, y: this.enemy.y };
  }

  getDistance(x1: number, x2: number, y1: number, y2: number): number {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  isWithinBoundaries(x: number, y: number): boolean {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }

  getEnemyDistance(): number {
    return this.getDistance(
      this.characters[0].x,
      this.characters[1].x,
      this.characters[0].y,
      this.characters[1].y
    );
  }

  getLastEnemyAction(): Action {
    return this.actions[this.actions.length - 1][1];
  }
}
