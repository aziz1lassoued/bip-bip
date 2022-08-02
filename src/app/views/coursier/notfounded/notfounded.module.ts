import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundedRoutingModule } from './notfounded-routing.module';
import { NotfoundedComponent } from './notfounded/notfounded.component';


@NgModule({
  declarations: [
    NotfoundedComponent
  ],
  imports: [
    CommonModule,
    NotfoundedRoutingModule
  ]
})
export class NotfoundedModule { }
