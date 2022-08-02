import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnemissionsRoutingModule } from './onemissions-routing.module';
import { OnemissionsComponent } from './onemissions/onemissions.component';


@NgModule({
  declarations: [
    OnemissionsComponent
  ],
  imports: [
    CommonModule,
    OnemissionsRoutingModule
  ]
})
export class OnemissionsModule { }
