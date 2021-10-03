import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { IconComponent } from './components/icon.component';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CodemirrorModule,
    IconComponent
  ]
})
export class SharedModule { }
