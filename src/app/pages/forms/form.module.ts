import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRoutingModule } from './form-routing.module';

import { ClasseFormPage } from './classe-form/classe-form.page';
import { JogadorFormPage } from './jogador-form/jogador-form.page';
import { CampanhaFormPage } from './campanha-form/campanha-form.page';
import { PersonagemFormPage } from './personagem-form/personagem-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormRoutingModule
  ],
  declarations: [
    ClasseFormPage,
    JogadorFormPage,
    CampanhaFormPage,
    PersonagemFormPage]
})
export class FormPageModule {}
