import { Component, OnInit } from '@angular/core';

import { mergeMap } from 'rxjs/operators';

import { Jogador } from '../../models/jogador';
import { BaseDetailsComponent } from '../../components/base-details/base-details.component';

import { StoreJogadorService } from '../../services/store/store-jogador.service';
import { StoreCampanhaService } from '../../services/store/store-campanha.service';
import { StorePersonagemService } from '../../services/store/store-personagem.service';

@Component({
  selector: 'jogador-detail',
  template: `
    <app-expandable expandHeight="250px" *ngIf="object as j" [expanded]="this.expanded">
      <div header >
        <ion-item button="true" (click)="expand()">
          <ion-icon name="man" slot="start"></ion-icon>
          <b>{{j.nome}}</b>
        </ion-item>
        <ion-item-options side="start">
          <ion-item-option color="danger" expandable (click)=emitDelete()>
            <ion-icon name="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </div>
      <div body >
        <ion-row class="ion-justify-content-between">
          <ion-col size="auto">
            <b>Personagens:</b>
            <ion-list *ngFor="let p of personagens | async">
              {{p.nome}}
            </ion-list>
          </ion-col>
          <ion-col size="auto">
            <b>Campanhas:</b>
            <ion-list *ngFor="let c of campanhas | async">
              {{c.nome}}
            </ion-list>
          </ion-col>
          <ion-col size="auto" class="ion-align-self-center">
            <ion-button (click)="emitSave()"><ion-icon name="create"></ion-icon></ion-button>
          </ion-col>
        </ion-row>
      </div>
    </app-expandable>
  `
})

export class JogadorDetailComponent extends BaseDetailsComponent<Jogador> implements OnInit {
  private personagens;
  private campanhas;
  private jogador;

  constructor(private store: StoreJogadorService, private sPe: StorePersonagemService, private sCa: StoreCampanhaService) {
    super();
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.jogador = this.store.getOneByID(this.object.id);
    this.getPersonagensByJogador();
    this.getCampanhasByPersonagem();
  }

  getPersonagensByJogador() {
    this.personagens = this.sPe.list.pipe(mergeMap (res => {
      const pList = new Array();

      Object(res).forEach(p => {
        if (p.idJogador === this.object.id) {
        pList.push(p);
      }});

      return Array(pList);
    }));
  }

  getCampanhasByPersonagem() {
    this.campanhas = this.sCa.list.pipe(mergeMap (res => {
      const cList = new Array();
      const pList: Array<any> = new Array();

      this.personagens.subscribe(per => {
        Object(per).forEach(p => {
          pList.push(p.idCampanha);
        });
      });

      Object(res).forEach(c => {
        if (pList.includes(c.id)) {
          cList.push(c);
        }});

      return Array(cList);
    }));
  }
}
