import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { BattlesRoutingModule } from './battles-routing.module';

import { MainBattleComponent } from './pages/battle/battle.component';
import { BattleReplayComponent } from './pages/replay/replay.component';

@NgModule({
  declarations: [
    MainBattleComponent,
    BattleReplayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BattlesRoutingModule
  ]
})
export class BattlesModule { }
