import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresdetailsRoutingModule } from './offresdetails-routing.module';
import { OffresdetailsComponent } from './offresdetails/offresdetails.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OffresdetailsComponent
  ],
  imports: [
    CommonModule,
    OffresdetailsRoutingModule,
    FormsModule
  ]
})
export class OffresdetailsModule { }
