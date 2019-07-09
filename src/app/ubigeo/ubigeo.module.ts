import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material
//import { MaterialModule } from '../material.module';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UbigeoRoutingModule } from './ubigeo-routing.module';
import { UbigeoComponent } from './ubigeo.component';

@NgModule({
  declarations: [UbigeoComponent],
  imports: [
    CommonModule,
    FormsModule,
    //MaterialModule,
    BrowserModule,
    UbigeoRoutingModule
  ]
})
export class UbigeoModule { }
