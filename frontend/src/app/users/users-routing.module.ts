import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLeaderboardComponent } from './leaderboard/leaderboard.component';
import { UserProfileComponent } from './profile/profile.component';
import { UserCodeComponent } from './code/code.component';

const routes: Routes = [
  { path: 'leaderboards', component: UserLeaderboardComponent },
  { path: 'me/characters', component: UserProfileComponent },
  { path: 'me/characters/:id', component: UserCodeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
