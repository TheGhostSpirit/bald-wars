import { Component, OnInit } from '@angular/core';
import { UserRanking } from 'src/app/core/models/user';

import { UsersService } from 'src/app/core/services/user/users.service';

@Component({
  selector: 'app-user-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.less']
})
export class UserLeaderboardComponent implements OnInit {

  rankings: UserRanking[] = [];

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.getRankings().subscribe(res => {
      this.rankings = res;
    });
  }

}
