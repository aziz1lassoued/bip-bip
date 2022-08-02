import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsoffreComponent } from '../../admin/commands/detailsoffre/detailsoffre.component';
import { OffresdetailsComponent } from './offresdetails/offresdetails.component';

const routes: Routes = [
  {path:'',component:OffresdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffresdetailsRoutingModule { }
