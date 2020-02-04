import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Campanha } from '../../models/campanha';

import { StoreJogadorService } from '../../services/store/store-Jogador.service';
import { StoreCampanhaService } from '../../services/store/store-campanha.service';
import { StorePersonagemService } from '../../services/store/store-personagem.service';

@Component({
    selector: 'campanha-detail',
    template: `
      <ion-item-sliding #slidingItem (click)="slidingItem.close()" *ngIf="campanha | async as p">
        <ion-item (click)="expand()">
          <ion-icon name="bonfire" slot="start"></ion-icon>
          <b>{{c.nome}}</b>
        </ion-item>
        <ion-item-options side="start">
          <ion-item-option color="danger" expandable (click)=emitDelete()>
            <ion-icon name="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <app-expandable expandHeight="250px" [expanded]="this.expanded" (click)="expand()">
        <ion-card-content *ngIf="campanha | async as c">
          <ion-grid>
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
          </ion-grid>
        </ion-card-content>
      </app-expandable>
`})

export class CampanhaDetailComponent implements OnInit {
  @Input() c: Campanha;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() expandCard = new EventEmitter();

  public expanded: boolean;

  private personagens;
  private jogadores;
  private campanha;

  private pLength;
  private jLength;

  constructor(private store: StoreCampanhaService, private sPe: StorePersonagemService, private sJo: StoreJogadorService) {
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.expanded = false;
    this.campanha = this.store.getOneByID(this.c.id);
    this.getPersonagensByCampanha();
    this.getJogadoresByCampanha();
  }

  getPersonagensByCampanha() {
    this.personagens = this.sPe.list.pipe(mergeMap (res => {
      const pList = new Array();

      Object(res).forEach(p => {
        if (p.idCampanha === this.c.id) {
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
          pList.push(p.id);
        });
      });

      Object(res).forEach(j => {
        if (pList.includes(j.id)) {
          jList.push(j);
        }});

      return Array(jList);
    }));
  }

  emitSave() {
    this.edit.emit(this.c.id);
  }
  emitDelete() {
    this.delete.emit(this.c);
  }
  expand() {
    this.expandCard.emit(this);
  }
}
