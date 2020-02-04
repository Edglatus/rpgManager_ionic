import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Personagem } from '../../models/personagem';

import { StoreClasseService } from '../../services/store/store-classe.service';
import { StoreJogadorService } from '../../services/store/store-Jogador.service';
import { StoreCampanhaService } from '../../services/store/store-campanha.service';
import { StorePersonagemService } from '../../services/store/store-personagem.service';

@Component({
    selector: 'personagem-detail',
    template: `
      <ion-item-sliding #slidingItem (click)="slidingItem.close()" >
        <ion-item (click)="expand(this)">
          <ion-icon name="man" slot="start"></ion-icon>
          <b>{{p.nome}}</b>
        </ion-item>
        <ion-item-options side="start">
          <ion-item-option color="danger" expandable (click)=emitDelete()>
            <ion-icon name="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <app-expandable expandHeight="150px" [expanded]="this.expanded" (click)="expand(this)">
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
      </app-expandable>
`})

export class PersonagemDetailComponent implements OnInit {
  @Input() p: Personagem;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() expandCard = new EventEmitter();

  public expanded: boolean;

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
    this.expanded = false;

    this.personagem = this.store.getOneByID(this.p.id);
    this.personagem.subscribe(res => {
      this.classe = this.sCl.getOneByID(res.idClasse);
      this.jogador = this.sJo.getOneByID(res.idJogador);
      this.campanha = this.sCa.getOneByID(res.idCampanha);
    });
  }

  emitSave() {
    this.edit.emit(this.p.id);
  }
  emitDelete() {
    this.delete.emit(this.p);
  }
  expand() {
    this.expandCard.emit(this);
  }
}
