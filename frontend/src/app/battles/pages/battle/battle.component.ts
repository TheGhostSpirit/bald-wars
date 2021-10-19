import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CharactersService } from 'src/app/core/services/character/characters.service';
import { BattlesService } from 'src/app/core/services/battle/battles.service';

import { Opponent } from 'src/app/core/models/opponent';
import { Battle } from 'src/app/core/models/battle';
import { Character } from 'src/app/core/models/character';

@Component({
  selector: 'app-main-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.less'],
})
export class MainBattleComponent implements OnInit {

  opponents: Opponent[] = [];
  battles: Battle[] = [];
  myCharacters: Character[] = [];

  formControl = new FormControl();

  constructor(
    private characterService: CharactersService,
    private auth: AuthService,
    private battleService: BattlesService
  ) {}

  ngOnInit(): void {
    this.characterService.findOpponents(this.auth.email).subscribe(res => {
      this.opponents = res;
    });
    this.characterService.findAllOfUser(this.auth.email).subscribe(res => {
      this.myCharacters = res;
      this.formControl.setValue(this.myCharacters[0]);
    });
    this.battleService.find().subscribe(res => {
      this.battles = res;
    });
  }

  attack(opponent: Opponent) {
    this.battleService.launch(this.formControl.value.id, opponent.id).subscribe();
  }

}
