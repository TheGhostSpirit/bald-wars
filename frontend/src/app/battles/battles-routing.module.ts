import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainBattleComponent } from './pages/battle/battle.component';

const routes: Routes = [
  { path: '', component: MainBattleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BattlesRoutingModule { }
