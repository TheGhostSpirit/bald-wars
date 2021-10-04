import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { BootstrapModule } from './bootstrap/bootstrap.module';

import { IconComponent } from './components/icon/icon.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    IconComponent,
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    BootstrapModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CodemirrorModule,
    BootstrapModule,
    IconComponent,
    ConfirmationModalComponent
  ]
})
export class SharedModule { }
