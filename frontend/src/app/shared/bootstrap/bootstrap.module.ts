import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ModalModule,
    TabsModule
  ],
  providers: [
    BsModalService,
  ]
})
export class BootstrapModule { }
