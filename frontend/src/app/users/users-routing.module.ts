import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  { path: 'leaderboards', component: UserLeaderboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
