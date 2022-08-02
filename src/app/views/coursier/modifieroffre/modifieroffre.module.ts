import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifieroffreRoutingModule } from './modifieroffre-routing.module';
import { ModifieroffreComponent } from './modifieroffre/modifieroffre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModifieroffreComponent
  ],
  imports: [
    CommonModule,
    ModifieroffreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModifieroffreModule { }
