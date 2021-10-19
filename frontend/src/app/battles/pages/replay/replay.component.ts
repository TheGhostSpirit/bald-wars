import { Component, OnInit } from '@angular/core';

import { BattlesService } from 'src/app/core/services/battle/battles.service';

import { Battle } from 'src/app/core/models/battle';

@Component({
  selector: 'app-battle-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.less'],
})
export class BattleReplayComponent implements OnInit {

  battles: Battle[] = [];
  constructor(
    private battleService: BattlesService
  ) {}

  ngOnInit(): void {
    this.battleService.find().subscribe(res => {
      this.battles = res;
    });
  }

}
