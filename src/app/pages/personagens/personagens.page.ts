import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { Personagem } from '../../models/personagem';
import { PersonagemDetailComponent } from './personagem.component';
import { BasePageComponent } from '../../components/base-page/base-page.component';

import { StorePersonagemService } from '../../services/store/store-personagem.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  styleUrls: ['./personagens.page.scss'],
})
export class PersonagensPage extends BasePageComponent<Personagem> implements OnInit {
  @ViewChildren('personagem') personagens: QueryList<PersonagemDetailComponent>;

  constructor(private r: Router, public aC: AlertController,
              private s: StorePersonagemService) {
    super(r, aC, s);
  }

  ngOnInit() {
    this.tName = 'Personagem'
    this.formPage = '/personagem-form';
  }

  expandItem(selectedItem) {
    super.expandItem(selectedItem, this.personagens);
  }
}
