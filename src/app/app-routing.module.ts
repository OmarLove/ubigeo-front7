import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbigeoComponent } from './ubigeo/ubigeo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/ubigeo', pathMatch: 'full' },
  { path: '', component: UbigeoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
