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
    character: Character;
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
    }, err => {
      console.log(err);
      if (err.status === 404) {
        this.usersService.create(this.auth.email, this.auth.name).subscribe(
          res => { this.user = res; }
        );
      }
    });
    this.charactersService.findAllOfUser(this.auth.email).subscribe(res => {
      this.characters = res;
    });
  }

  delete(template: TemplateRef<ConfirmationModalComponent>, character: Character) {
    this.modalState = {
      message: `This will delete the character "${character.name}"!`,
      character
    };
    this.modalRef = this.modal.show(template);
  }

  confirmDeletion(character: Character) {
    this.charactersService.delete(this.auth.email, character.id).subscribe(() => {
      console.log('deleted');
    });
  }

}
