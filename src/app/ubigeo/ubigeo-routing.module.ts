import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UbigeoComponent } from './ubigeo.component';

const routes: Routes =
[
  { path: '', redirectTo: 'ubigeo', pathMatch: 'full'},
  { path: 'ubigeo', component: UbigeoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbigeoRoutingModule { }
