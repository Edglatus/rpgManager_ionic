import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { Jogador } from '../../models/jogador';
import { JogadorDetailComponent } from './jogador.component';
import { BasePageComponent } from '../../components/base-page/base-page.component';

import { StoreJogadorService } from '../../services/store/store-jogador.service';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.page.html',
  styleUrls: ['./jogadores.page.scss'],
})
export class JogadoresPage extends BasePageComponent<Jogador> implements OnInit {
  @ViewChildren('jogador') jogadores: QueryList<JogadorDetailComponent>;

  constructor(private r: Router, public aC: AlertController,
              private s: StoreJogadorService) {
    super(r, aC, s);
  }

  ngOnInit() {
    this.tName = 'Jogador'
    this.formPage = '/jogador-form';
  }

  expandItem(selectedItem) {
    super.expandItem(selectedItem, this.jogadores);
  }
}
