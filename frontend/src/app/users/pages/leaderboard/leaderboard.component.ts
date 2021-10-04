import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/core/services/user/users.service';

import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.less']
})
export class UserLeaderboardComponent implements OnInit {

  users: User[] = [];

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(res => {
      this.users = res;
    });
  }

}
