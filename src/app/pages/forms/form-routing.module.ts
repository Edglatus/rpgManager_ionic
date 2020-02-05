import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasseFormPage } from './classe-form/classe-form.page';
import { JogadorFormPage } from './jogador-form/jogador-form.page';
import { CampanhaFormPage } from './campanha-form/campanha-form.page';
import { PersonagemFormPage } from './personagem-form/personagem-form.page';

const routes: Routes = [
  {
    path: 'campanha',
    component: CampanhaFormPage
  },
  {
    path: 'campanha/:id',
    component: CampanhaFormPage
  },
  {
    path: 'classe',
    component: ClasseFormPage
  },
  {
    path: 'classe/:id',
    component: ClasseFormPage
  },
  {
    path: 'personagem',
    component: PersonagemFormPage
  },
  {
    path: 'personagem/:id',
    component: PersonagemFormPage
  },
  {
    path: 'jogador',
    component: JogadorFormPage
  },
  {
    path: 'jogador/:id',
    component: JogadorFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
