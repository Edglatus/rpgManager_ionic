import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampanhaFormPageRoutingModule } from './campanha-form-routing.module';

import { CampanhaFormPage } from './campanha-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampanhaFormPageRoutingModule
  ],
  declarations: [CampanhaFormPage]
})
export class CampanhaFormPageModule {}
