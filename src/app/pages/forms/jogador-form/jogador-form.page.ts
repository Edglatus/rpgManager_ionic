import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Jogador } from '../../../models/jogador';
import { BaseFormPage } from '../base-form.component';

import { StoreJogadorService } from '../../../services/store/store-jogador.service';

@Component({
  selector: 'app-jogador-form',
  templateUrl: './jogador-form.page.html',
  styleUrls: ['./jogador-form.page.scss'],
})
export class JogadorFormPage extends BaseFormPage<Jogador> implements OnInit {

  constructor(private aR: ActivatedRoute, private r: Router, private s: StoreJogadorService) {
    super(aR, r, s);
    this.object = new Jogador({id: 0, nome: 'Novo'});
    this.listPage = '/jogadores';
  }

  ngOnInit() {
    this.getData();
  }
}
