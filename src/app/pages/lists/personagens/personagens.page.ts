import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { BasePage } from '../base-page.component';
import { Personagem } from '../../../models/personagem';
import { PersonagemDetailComponent } from './personagem.component';

import { StoreClasseService } from '../../../services/store/store-classe.service';
import { StoreJogadorService } from '../../../services/store/store-jogador.service';
import { StoreCampanhaService } from '../../../services/store/store-campanha.service';
import { StorePersonagemService } from '../../../services/store/store-personagem.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  styleUrls: ['./personagens.page.scss'],
})
export class PersonagensPage extends BasePage<Personagem> implements OnInit {
  @ViewChildren('personagem') personagens: QueryList<PersonagemDetailComponent>;

  constructor(private r: Router, public aC: AlertController,
              private s: StorePersonagemService, private sCa: StoreCampanhaService,
              private sCl: StoreClasseService, private sJo: StoreJogadorService) {
    super(r, aC, s);
  }

  ngOnInit() {
    this.tName = 'Personagem';
    this.formPage = 'personagem';
  }

  expandItem(selectedItem) {
    super.expandItem(selectedItem, this.personagens);
  }
}
