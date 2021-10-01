import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UsersService } from 'src/app/core/services/user/users.service';

import { User } from 'src/app/core/models/user';
import { Character } from 'src/app/core/models/character';
import { CharactersService } from 'src/app/core/services/character/characters.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class UserProfileComponent implements OnInit {

  user: User | undefined;
  characters: Character[] = [];

  constructor(
    private usersService: UsersService,
    private auth: AuthService,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.usersService.findOne(this.auth.email).subscribe(res => {
      this.user = res;
    });
    this.charactersService.find(this.auth.email).subscribe(res => {
      this.characters = res;
    });
  }

}
