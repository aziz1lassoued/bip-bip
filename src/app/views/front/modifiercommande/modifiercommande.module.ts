import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifiercommandeRoutingModule } from './modifiercommande-routing.module';
import { ModifiercommandeComponent } from './modifiercommande/modifiercommande.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModifiercommandeComponent
  ],
  imports: [
    CommonModule,
    ModifiercommandeRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModifiercommandeModule { }
