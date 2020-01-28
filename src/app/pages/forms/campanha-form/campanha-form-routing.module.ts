import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampanhaFormPage } from './campanha-form.page';

const routes: Routes = [
  {
    path: '',
    component: CampanhaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampanhaFormPageRoutingModule {}
