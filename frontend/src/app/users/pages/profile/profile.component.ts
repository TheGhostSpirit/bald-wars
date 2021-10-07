import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UsersService } from 'src/app/core/services/user/users.service';
import { CharactersService } from 'src/app/core/services/character/characters.service';

import { User } from 'src/app/core/models/user';
import { Character } from 'src/app/core/models/character';

import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class UserProfileComponent implements OnInit {

  user: User | undefined;
  characters: Character[] = [];

  modalRef?: BsModalRef<unknown>;
  modalState?: {
    message: string;
    characterName: string;
  };

  constructor(
    private usersService: UsersService,
    private auth: AuthService,
    private charactersService: CharactersService,
    private modal: BsModalService
  ) { }

  ngOnInit(): void {
    this.usersService.findOne(this.auth.email).subscribe(res => {
      this.user = res;
    }, () => {
      this.usersService.create(this.auth.email, this.auth.name).subscribe(
        res => { this.user = res; }
      );
    });
    this.charactersService.find(this.auth.email).subscribe(res => {
      this.characters = res;
    });
  }

  delete(template: TemplateRef<ConfirmationModalComponent>, characterName: string) {
    this.modalState = {
      message: `This will delete the character "${characterName}"!`,
      characterName
    };
    this.modalRef = this.modal.show(template);
  }

  confirmDeletion(characterName: string) {
    this.charactersService.delete(this.auth.email, characterName).subscribe(() => {
      console.log('deleted');
    });
  }

}
