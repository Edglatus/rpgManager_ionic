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
    path: 'personagens',
    loadChildren: () => import('./pages/lists/personagens/personagens.module').then( m => m.PersonagensPageModule)
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
    loadChildren: () => import('./pages/lists/campanhas/campanhas.module').then( m => m.CampanhasPageModule)
  },
  {
    path: 'campanha-form',
    loadChildren: () => import('./pages/forms/campanha-form/campanha-form.module').then( m => m.CampanhaFormPageModule)
  },
  {
    path: 'campanha-form/:id',
    loadChildren: () => import('./pages/forms/campanha-form/campanha-form.module').then( m => m.CampanhaFormPageModule)
  },  {
    path: 'classes',
    loadChildren: () => import('./pages/lists/classes/classes.module').then( m => m.ClassesPageModule)
  },
  {
    path: 'jogadores',
    loadChildren: () => import('./pages/lists/jogadores/jogadores.module').then( m => m.JogadoresPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
