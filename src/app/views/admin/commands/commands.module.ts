import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandsRoutingModule } from './commands-routing.module';
import { CommandsComponent } from './commands/commands.component';
import { FormsModule } from '@angular/forms';
import { DetailsoffreComponent } from './detailsoffre/detailsoffre.component';


@NgModule({
  declarations: [
    CommandsComponent,
    DetailsoffreComponent
  ],
  imports: [
    CommonModule,
    CommandsRoutingModule,
    FormsModule
  ]
})
export class CommandsModule { }
