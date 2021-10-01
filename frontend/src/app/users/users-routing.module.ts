import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLeaderboardComponent } from './leaderboard/leaderboard.component';
import { UserProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'leaderboards', component: UserLeaderboardComponent },
  { path: 'me/characters', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
