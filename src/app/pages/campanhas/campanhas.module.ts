import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampanhasPageRoutingModule } from './campanhas-routing.module';

import { ComponentsModule } from '../../components/components.module';

import { CampanhasPage } from './campanhas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CampanhasPageRoutingModule
  ],
  declarations: [CampanhasPage]
})
export class CampanhasPageModule {}
