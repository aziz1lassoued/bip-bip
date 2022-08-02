import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifieroffreComponent } from './modifieroffre/modifieroffre.component';

const routes: Routes = [
  {path:'',component:ModifieroffreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifieroffreRoutingModule { }
