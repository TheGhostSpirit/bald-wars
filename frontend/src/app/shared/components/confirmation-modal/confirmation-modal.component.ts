import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.less']
})
export class ConfirmationModalComponent implements OnInit {

  @Input() message?: string;
  @Input() modalRef?: BsModalRef;
  @Input() characterName?: string;

  @Output() confirmed = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  confirm() {
    this.confirmed.emit(this.characterName);
    this.modalRef?.hide();
  }

}
