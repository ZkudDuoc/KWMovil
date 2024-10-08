import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuContraPageRoutingModule } from './recu-contra-routing.module';

import { RecuContraPage } from './recu-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuContraPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RecuContraPage]
})
export class RecuContraPageModule {}
