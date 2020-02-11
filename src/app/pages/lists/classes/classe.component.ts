import { Component, OnInit } from '@angular/core';

import { mergeMap } from 'rxjs/operators';

import { Classe } from '../../../models/classe';
import { BaseDetailsComponent } from '../base-details.component';

import { StoreClasseService } from '../../../services/store/store-classe.service';
import { StorePersonagemService } from '../../../services/store/store-personagem.service';

@Component({
  selector: 'classe-detail',
  template: `
    <ion-card>
      <app-expandable expandHeight="250px" *ngIf="object as c" [expanded]="this.expanded">
        <div header >
          <ion-item button="true" (click)="expand()">
            <ion-icon name="color-wand" slot="start"></ion-icon>
            <b>{{c.nome}}</b>
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
            <ion-col size="auto" class="ion-align-self-center">
              <ion-button (click)="emitSave()"><ion-icon name="create"></ion-icon></ion-button>
            </ion-col>
          </ion-row>
        </div>
      </app-expandable>
    </ion-card>
  `
})

export class ClasseDetailComponent extends BaseDetailsComponent<Classe> implements OnInit {
  private classe;
  private personagens;

  constructor(private store: StoreClasseService, private sPe: StorePersonagemService) {
    super();
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.classe = this.store.getOneByID(this.object.id);
    this.getPersonagensByClasse();
  }

  getPersonagensByClasse() {
    this.personagens = this.sPe.list.pipe(mergeMap (res => {
      const pList = new Array();

      Object(res).forEach(p => {
        if (p.idClasse === this.object.id) {
        pList.push(p);
      }});

      return Array(pList);
    }));
  }
}
