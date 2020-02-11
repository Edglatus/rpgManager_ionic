import { Component, OnInit } from '@angular/core';

import { mergeMap } from 'rxjs/operators';

import { Campanha } from '../../../models/campanha';
import { BaseDetailsComponent } from '../base-details.component';

import { StoreJogadorService } from '../../../services/store/store-jogador.service';
import { StoreCampanhaService } from '../../../services/store/store-campanha.service';
import { StorePersonagemService } from '../../../services/store/store-personagem.service';

@Component({
  selector: 'campanha-detail',
  template: `
    <ion-card>
      <app-expandable expandHeight="450px" *ngIf="object as c" [expanded]="this.expanded">
        <div header >
          <ion-item button="true" (click)="expand()">
            <ion-icon name="bonfire" slot="start"></ion-icon>
            <b>{{c.nome}}</b>
          </ion-item>
          <ion-item-options side="start">
            <ion-item-option color="danger" expandable (click)=emitDelete()>
              <ion-icon name="trash"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </div>
        <div body >
          <ion-row class="ion-justify-content-center">
            <p><b>Data de Início:</b> {{c.cdate | date:'dd/MM/yyyy'}}</p>
          </ion-row>
          <ion-row class="ion-justify-content-between">
            <ion-col size="auto">
              <b>Personagens:</b>
              <ion-list *ngFor="let p of personagens | async">
                {{p.nome}}
              </ion-list>
            </ion-col>
            <ion-col size="auto">
              <b>Jogadores:</b>
              <ion-list *ngFor="let j of jogadores | async">
                {{j.nome}}
              </ion-list>
            </ion-col>
            <ion-col size="auto" class="ion-align-self-center">
              <ion-button (click)="emitSave()"><ion-icon name="create"></ion-icon></ion-button>
            </ion-col>
          </ion-row>
        </div>
      </app-expandable>
    </ion-card>
  `
})

export class CampanhaDetailComponent extends BaseDetailsComponent<Campanha> implements OnInit {
  private personagens;
  private jogadores;
  private campanha;

  constructor(private store: StoreCampanhaService, private sPe: StorePersonagemService, private sJo: StoreJogadorService) {
    super();
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.campanha = this.store.getOneByID(this.object.id);
    this.getPersonagensByCampanha();
    this.getJogadoresByCampanha();
  }

  getPersonagensByCampanha() {
    this.personagens = this.sPe.list.pipe(mergeMap (res => {
      const pList = new Array();

      Object(res).forEach(p => {
        if (p.idCampanha === this.object.id) {
        pList.push(p);
      }});

      return Array(pList);
    }));
  }

  getJogadoresByCampanha() {
    this.jogadores = this.sJo.list.pipe(mergeMap (res => {
      const jList = new Array();
      const pList: Array<any> = new Array();

      this.personagens.subscribe(per => {
        Object(per).forEach(p => {
          pList.push(p.idJogador);
        });
      });

      Object(res).forEach(j => {
        if (pList.includes(j.id)) {
          jList.push(j);
        }});

      return Array(jList);
    }));
  }
}
