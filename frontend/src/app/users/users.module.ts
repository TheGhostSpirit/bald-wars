import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

import { UserLeaderboardComponent } from './leaderboard/leaderboard.component';
import { UserProfileComponent } from './profile/profile.component';
import { UserCodeComponent } from './code/code.component';

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
