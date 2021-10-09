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
  @Input() data?: any;

  @Output() confirmed = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  confirm() {
    this.confirmed.emit(this.data);
    this.modalRef?.hide();
  }

}
