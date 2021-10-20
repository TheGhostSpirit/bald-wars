import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BattlesService } from 'src/app/core/services/battle/battles.service';

import { Battle } from 'src/app/core/models/battle';

@Component({
  selector: 'app-battle-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.less'],
})
export class BattleReplayComponent implements OnInit {

  gridIter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  status: 'loading' | 'found' | 'not found' = 'loading';
  battle: Battle;
  moves: any[] = [];
  turn: number = -1;

  char1 = {
    name: '',
    hp: 0,
    x: null,
    y: null
  };

  char2 = {
    name: '',
    hp: 0,
    x: null,
    y: null
  };

  constructor(
    private battleService: BattlesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.battleService.find().subscribe(res => {
      const battle = res.find(b => b.id === id);

      if (!battle) {
        this.status = 'not found';
        return;
      }

      this.battle = battle;
      this.battle.moves = JSON.parse(this.battle.moves);
      this.moves = this.battle.moves.moves;
      this.char1.hp = this.battle.moves.char1.maxHp;
      this.char1.name = this.battle.moves.char1.name;
      this.char2.hp = this.battle.moves.char2.maxHp;
      this.char2.name = this.battle.moves.char2.name;
      this.status = 'found';
    });
  }

  getHpPercentage(char: 'char1' | 'char2'): string {
    const val = (this[char].hp / +this.battle.moves[char].maxHp) * 100;
    return `${val > 0 ? val : 0}%`;
  }

  getMoveDescription(): string {
    if (this.turn === -1) {
      return 'Press next to roll the next move.';
    }

    const move = this.moves[this.turn];
    const char = this.getCharacter(move[0].name);

    if (!this.isCombatAction(move)) {
      return `${char.name} moved to x: ${char.x} y: ${char.y}`;
    }

    if (this.isCombatAction(move)) {
      switch(move[1]) {
        case 0:
          return `${char.name} attacked and dealt melee damage`;
        case 1:
          return `${char.name} attacked and dealt ranged damage`;
        case 2:
          return `${char.name} healed`;
      }
    }

    return '';
  }

  nextMove(): void {
    if (this.turn >= this.moves.length - 1) {
      return;
    }

    this.turn += 1;
    this.applyMove();
  }

  resetMoves(): void {
    this.turn = -1;
    this.char1 = {
      name: this.battle.moves.char1.name,
      hp: this.battle.moves.char1.maxHp,
      x: null,
      y: null
    };

    this.char2 = {
      name: this.battle.moves.char2.name,
      hp: this.battle.moves.char2.maxHp,
      x: null,
      y: null
    };
  }

  isCombatAction(move: any): boolean {
    return typeof move[1] === 'number';
  }

  getCharacter(char: string) {
    return this.char1.name === char ? this.char1 : this.char2;
  }

  getOpponent(char: string) {
    return this.char1.name === char ? this.char2 : this.char1;
  }

  applyMove(): any {
    const move = this.moves[this.turn];
    const char = this.getCharacter(move[0].name);
    const outcome = move[2];

    if (this.isCombatAction(move)) {
      this.char1.hp = move[2].char1;
      this.char2.hp = move[2].char2;
    } else {
      char.x = outcome.x;
      char.y = outcome.y;
    }
  }

}
