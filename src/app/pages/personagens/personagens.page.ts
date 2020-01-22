import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Classe } from '../../models/classe';
import { Personagem } from '../../models/personagem';

import { ApiClasseService } from '../../services/api-classe.service';
import { ApiJogadorService } from '../../services/api-jogador.service';
import { ApiCampanhaService } from '../../services/api-campanha.service';
import { ApiPersonagemService } from '../../services/api-personagem.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  styleUrls: ['./personagens.page.scss'],
})
export class PersonagensPage implements OnInit {
  personagens: any;
  campanhas: any;
  jogadores: any;
  classes: any;

  constructor(private router: Router, private api: ApiPersonagemService, private apiClasse: ApiClasseService,
              private apiJogador: ApiJogadorService, private apiCampanha: ApiCampanhaService) {
 }

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    await this.apiClasse.getAll()
      .subscribe(res => {
        this.classes = res;
      }, err => {
        console.log(err);
      });

    await this.apiJogador.getAll()
      .subscribe(res => {
        this.jogadores = res;
      }, err => {
        console.log(err);
      });

    await this.apiCampanha.getAll()
      .subscribe(res => {
        this.campanhas = res;
      }, err => {
        console.log(err);
      });

    await this.api.getAll()
      .subscribe(res => {
        this.personagens = res;
      }, err => {
        console.log(err);
      });
  }

  expandItem(selectedItem) {
    selectedItem.expanded = !selectedItem.expanded;
  }
}
