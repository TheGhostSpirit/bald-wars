import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

import { UserLeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { UserProfileComponent } from './pages/profile/profile.component';
import { UserCodeComponent } from './pages/code/code.component';

@NgModule({
  declarations: [
    UserLeaderboardComponent,
    UserProfileComponent,
    UserCodeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
