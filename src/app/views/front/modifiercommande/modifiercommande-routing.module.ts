import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifiercommandeComponent } from './modifiercommande/modifiercommande.component';

const routes: Routes = [
  {path:'',component:ModifiercommandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifiercommandeRoutingModule { }
