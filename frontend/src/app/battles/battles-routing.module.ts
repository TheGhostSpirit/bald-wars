import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainBattleComponent } from './pages/battle/battle.component';
import { BattleReplayComponent } from './pages/replay/replay.component';

const routes: Routes = [
  { path: '', component: MainBattleComponent },
  { path: ':id', component: BattleReplayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BattlesRoutingModule { }
