import { Component, OnInit, Input, Output } from '@angular/core';

import { Personagem } from '../../../models/personagem';
import { BaseDetailsComponent } from '../base-details.component';

import { StoreClasseService } from '../../../services/store/store-classe.service';
import { StoreJogadorService } from '../../../services/store/store-jogador.service';
import { StoreCampanhaService } from '../../../services/store/store-campanha.service';
import { StorePersonagemService } from '../../../services/store/store-personagem.service';

@Component({
  selector: 'personagem-detail',
  template: `
    <ion-item-divider *ngIf="hasCampanhaLabel || hasClasseLabel || hasJogadorLabel">
      <ion-label *ngIf="hasCampanhaLabel && (campanha | async) as ca ">
        {{ca.nome}}
      </ion-label>
      <ion-label *ngIf="hasClasseLabel && (classe | async) as cl">
        {{cl.nome}}
      </ion-label>
      <ion-label *ngIf="hasJogadorLabel && !(jogador | async)">
        Personagem do Mestre
      </ion-label>
      <ion-label *ngIf="hasJogadorLabel && (jogador | async) as jo">
        {{jo.nome}}
      </ion-label>
    </ion-item-divider>

    <ion-card>
      <app-expandable expandHeight="150px" *ngIf="object as p" [expanded]="this.expanded">
        <div header>
          <ion-item button="true" (click)="expand(this)">
            <ion-icon name="man" slot="start"></ion-icon>
            <b>{{p.nome}}</b>
          </ion-item>
          <ion-item-options side="start">
            <ion-item-option color="danger" expandable (click)=emitDelete()>
              <ion-icon name="trash"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </div>
        <div body>
          <ion-row *ngIf="!(jogador | async)" class="ion-justify-content-center" >
            <ion-col size="auto">
              <b>Personagem do Mestre</b>
            </ion-col>
          </ion-row>
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
        </div>
      </app-expandable>
    </ion-card>
  `
})

export class PersonagemDetailComponent extends BaseDetailsComponent<Personagem> implements OnInit {
  @Input() hasCampanhaLabel: boolean;
  @Input() hasJogadorLabel: boolean;
  @Input() hasClasseLabel: boolean;

  private personagem;
  private classe;
  private jogador;
  private campanha;

  constructor(private store: StorePersonagemService, private sCa: StoreCampanhaService,
              private sCl: StoreClasseService, private sJo: StoreJogadorService) {
    super();
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.personagem = this.store.getOneByID(this.object.id);
    this.personagem.subscribe(res => {
      this.classe = this.sCl.getOneByID(res.idClasse);
      this.jogador = this.sJo.getOneByID(res.idJogador);
      this.campanha = this.sCa.getOneByID(res.idCampanha);
    });
  }
}
