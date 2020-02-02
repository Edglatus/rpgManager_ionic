import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Personagem } from '../../models/personagem';


import { StoreClasseService } from '../../services/store/store-classe.service';
import { StoreJogadorService } from '../../services/store/store-Jogador.service';
import { StoreCampanhaService } from '../../services/store/store-campanha.service';
import { StorePersonagemService } from '../../services/store/store-personagem.service';

@Component({
    selector: 'personagem-detail',
    template: `
      <ion-card-content>
        <ion-grid>
          <ion-row class="ion-justify-content-between ion-align-items-center">
            <ion-col size="auto">
              <div *ngIf="jogador | async"><p><b>Jogador:</b></p></div>
              <div *ngIf="classe | async"><p><b>Classe:</b></p></div>
              <div *ngIf="campanha | async"><p><b>Campanha:</b></p></div>
            </ion-col>
            <ion-col size="auto">
              <div *ngIf="jogador | async as j"><p>{{j.nome}}</p></div>
              <div *ngIf="classe | async as cl"><p>{{cl.nome}}</p></div>
              <div *ngIf="campanha | async as ca"><p>{{ca.nome}}</p></div>
            </ion-col>
            <ion-col size="auto">
              <ion-button (click)="emitSave()"><ion-icon name="create"></ion-icon></ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-content>
`})

export class PersonagemDetailComponent implements OnInit {
  @Input() id: number;
  @Output() editPersonagem = new EventEmitter();

  private personagem;
  private classe;
  private jogador;
  private campanha;

  constructor(private store: StorePersonagemService, private sCa: StoreCampanhaService,
              private sCl: StoreClasseService, private sJo: StoreJogadorService) {
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.personagem = this.store.getOneByID(this.id);
    this.personagem.subscribe(res => {
      this.classe = this.sCl.getOneByID(res.idClasse);
      this.jogador = this.sJo.getOneByID(res.idJogador);
      this.campanha = this.sCa.getOneByID(res.idCampanha);
    });
  }

  emitSave() {
    this.editPersonagem.emit(this.id);
  }
}
