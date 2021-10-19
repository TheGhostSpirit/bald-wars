import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { BattlesRoutingModule } from './battles-routing.module';

import { MainBattleComponent } from './pages/battle/battle.component';

@NgModule({
  declarations: [
    MainBattleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BattlesRoutingModule
  ]
})
export class BattlesModule { }
