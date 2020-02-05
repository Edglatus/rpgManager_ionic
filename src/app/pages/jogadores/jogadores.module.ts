import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogadoresPageRoutingModule } from './jogadores-routing.module';

import { ComponentsModule } from '../../components/components.module'

import { JogadoresPage } from './jogadores.page';

import { JogadorDetailComponent } from './jogador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    JogadoresPageRoutingModule
  ],
  declarations: [JogadoresPage, JogadorDetailComponent]
})
export class JogadoresPageModule {}
