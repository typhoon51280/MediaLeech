import { NgModule } from '@angular/core';
import {
  MdIconModule,
  MdSidenavModule,
  MdButtonModule,
  MdCheckboxModule
} from '@angular/material';

@NgModule({
  exports: [
    MdIconModule,
    MdSidenavModule,
    MdButtonModule,
    MdCheckboxModule
  ],
})
export class AppMaterialModule { }
