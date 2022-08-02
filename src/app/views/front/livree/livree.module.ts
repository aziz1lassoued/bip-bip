import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreeRoutingModule } from './livree-routing.module';
import { LivreeComponent } from './livree/livree.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LivreeComponent
  ],
  imports: [
    CommonModule,
    LivreeRoutingModule,
    FormsModule
  ]
})
export class LivreeModule { }
