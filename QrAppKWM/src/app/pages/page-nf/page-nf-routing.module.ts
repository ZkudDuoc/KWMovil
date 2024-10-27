import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNFPage } from './page-nf.page';

const routes: Routes = [
  {
    path: '',
    component: PageNFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNFPageRoutingModule {}
