import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuContraPage } from './recu-contra.page';

const routes: Routes = [
  {
    path: '',
    component: RecuContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuContraPageRoutingModule {}
