import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { Campanha } from '../../models/campanha';
import { CampanhaDetailComponent } from './campanha.Component';
import { BasePageComponent } from '../../components/base-page/base-page.component';

import { StoreCampanhaService } from '../../services/store/store-campanha.service';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.page.html',
  styleUrls: ['./campanhas.page.scss'],
})
export class CampanhasPage extends BasePageComponent<Campanha> implements OnInit {
  @ViewChildren('campanha') campanhas: QueryList<CampanhaDetailComponent>;

  constructor(private r: Router, public aC: AlertController,
              private s: StoreCampanhaService) {
    super(r, aC, s);
  }

  ngOnInit() {
    this.tName = 'Campanha'
    this.formPage = '/campanha-form';
  }

  expandItem(selectedItem){
    super.expandItem(selectedItem, this.campanhas);
  }
}
