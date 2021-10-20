import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';

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

  @ViewChild('tabSet') tabset: TabsetComponent;

  modalRef?: BsModalRef<unknown>;
  modalState?: {
    message: string;
    opponent: Opponent;
  };

  opponents: Opponent[] = [];
  battles: Battle[] = [];
  myCharacters: Character[] = [];

  formControl = new FormControl();

  constructor(
    private characterService: CharactersService,
    private auth: AuthService,
    private battleService: BattlesService,
    private modal: BsModalService
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

  attack(template: TemplateRef<ConfirmationModalComponent>, opponent: Opponent) {
    this.modalState = {
      message: `Are you sure you want to confirm the attack of "${opponent.name}"?`,
      opponent
    };
    this.modalRef = this.modal.show(template);
  }

  confirmAttack(opponent: Opponent) {
    this.battleService.launch(this.formControl.value.id, opponent.id).subscribe(() => {
      this.battleService.find().subscribe(res => {
        this.battles = res;
        this.tabset.tabs[1].active = true;
      });
    });
  }

}
