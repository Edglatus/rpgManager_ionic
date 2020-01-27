import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonagemFormPageRoutingModule } from './personagem-form-routing.module';

import { PersonagemFormPage } from './personagem-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonagemFormPageRoutingModule
  ],
  declarations: [PersonagemFormPage]
})
export class PersonagemFormPageModule {}
