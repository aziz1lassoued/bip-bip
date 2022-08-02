import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosecmddRoutingModule } from './closecmdd-routing.module';
import { ClosecmddComponent } from './closecmdd/closecmdd.component';


@NgModule({
  declarations: [
    ClosecmddComponent,
    
  ],
  imports: [
    CommonModule,
    ClosecmddRoutingModule
  ]
})
export class ClosecmddModule { }
