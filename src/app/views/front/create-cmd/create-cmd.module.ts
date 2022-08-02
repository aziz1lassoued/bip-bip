import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCmdRoutingModule } from './create-cmd-routing.module';
import { CreateCmdComponent } from './create-cmd/create-cmd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateCmdComponent
  ],
  imports: [
    CommonModule,
    CreateCmdRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateCmdModule { }
