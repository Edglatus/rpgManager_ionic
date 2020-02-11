import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Personagem } from '../../../models/personagem';
import { BaseFormPage } from '../base-form.component';

import { StoreClasseService } from '../../../services/store/store-classe.service';
import { StoreJogadorService } from '../../../services/store/store-jogador.service';
import { StoreCampanhaService } from '../../../services/store/store-campanha.service';
import { StorePersonagemService } from '../../../services/store/store-personagem.service';

@Component({
  selector: 'app-personagem-form',
  templateUrl: './personagem-form.page.html',
  styleUrls: ['./personagem-form.page.scss'],
})
export class PersonagemFormPage extends BaseFormPage<Personagem> implements OnInit {

  constructor(private aR: ActivatedRoute, private r: Router,
              private s: StorePersonagemService, private sCa: StoreCampanhaService,
              private sCl: StoreClasseService, private sJo: StoreJogadorService) {
    super(aR, r, s);
    this.object = new Personagem({id: 0, nome: 'Nova Personagem', idClasse: 0, idJogador: undefined, idCampanha: 0});
    this.listPage = '/personagens';
  }

  ngOnInit() {
    this.getData();
  }
}
