import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonagemFormPage } from './personagem-form.page';

const routes: Routes = [
  {
    path: '',
    component: PersonagemFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonagemFormPageRoutingModule {}
