import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnemissionsComponent } from './onemissions/onemissions.component';

const routes: Routes = [
  {path:'',component:OnemissionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnemissionsRoutingModule { }
