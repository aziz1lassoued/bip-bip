import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesoffresRoutingModule } from './mesoffres-routing.module';
import { MesoffresComponent } from './mesoffres/mesoffres.component';
import { MatDialogModule } from '@angular/material/dialog'


@NgModule({
  declarations: [
    MesoffresComponent,
  ],
  imports: [
    CommonModule,
    MesoffresRoutingModule,
    MatDialogModule
  ]
})
export class MesoffresModule { }
