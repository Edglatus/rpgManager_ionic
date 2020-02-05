import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesPage } from './classes/classes.page';
import { CampanhasPage } from './campanhas/campanhas.page';
import { JogadoresPage } from './jogadores/jogadores.page';
import { PersonagensPage } from './personagens/personagens.page';

const routes: Routes = [
  {
    path: 'classes',
    component: ClassesPage
  },
  {
    path: 'jogadores',
    component: JogadoresPage
  },
  {
    path: 'campanhas',
    component: CampanhasPage
  },
  {
    path: 'personagens',
    component: PersonagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
