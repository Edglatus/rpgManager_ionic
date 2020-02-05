import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRoutingModule } from './list-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { ClassesPage } from './classes/classes.page';
import { CampanhasPage } from './campanhas/campanhas.page';
import { JogadoresPage } from './jogadores/jogadores.page';
import { PersonagensPage } from './personagens/personagens.page';

import { ClasseDetailComponent } from './classes/classe.component';
import { JogadorDetailComponent } from './jogadores/jogador.component';
import { CampanhaDetailComponent } from './campanhas/campanha.component';
import { PersonagemDetailComponent } from './personagens/personagem.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListRoutingModule
  ],
  declarations: [
    ClassesPage,
    CampanhasPage,
    JogadoresPage,
    PersonagensPage,
    ClasseDetailComponent,
    JogadorDetailComponent,
    CampanhaDetailComponent,
    PersonagemDetailComponent
  ]
})
export class ListPageModule {}
