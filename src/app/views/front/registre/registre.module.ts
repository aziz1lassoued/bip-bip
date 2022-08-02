import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistreRoutingModule } from './registre-routing.module';
import { RegistreComponent } from './foldercomponentREGISTRE/registre/registre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [
    RegistreComponent
  ],
  imports: [
    CommonModule,
    RegistreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class RegistreModule { }
