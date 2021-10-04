import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ModalModule,
  ],
  providers: [
    BsModalService,
  ]
})
export class BootstrapModule { }
