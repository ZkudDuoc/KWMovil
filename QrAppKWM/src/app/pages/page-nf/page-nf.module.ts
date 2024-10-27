import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageNFPageRoutingModule } from './page-nf-routing.module';

import { PageNFPage } from './page-nf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageNFPageRoutingModule
  ],
  declarations: [PageNFPage]
})
export class PageNFPageModule {}
