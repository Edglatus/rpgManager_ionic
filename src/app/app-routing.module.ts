import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'personagens',
    loadChildren: () => import('./pages/personagens/personagens.module').then( m => m.PersonagensPageModule)
  },
  {
    path: 'personagem-form',
    loadChildren: () => import('./pages/forms/personagem-form/personagem-form.module').then( m => m.PersonagemFormPageModule)
  },
  {
    path: 'personagem-form/:id',
    loadChildren: () => import('./pages/forms/personagem-form/personagem-form.module').then( m => m.PersonagemFormPageModule)
  },
  {
    path: 'campanhas',
    loadChildren: () => import('./pages/campanhas/campanhas.module').then( m => m.CampanhasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
