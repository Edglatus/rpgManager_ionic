import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { BasePage } from '../base-page.component';
import { Campanha } from '../../../models/campanha';
import { CampanhaDetailComponent } from './campanha.Component';

import { StoreCampanhaService } from '../../../services/store/store-campanha.service';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.page.html',
  styleUrls: ['./campanhas.page.scss'],
})
export class CampanhasPage extends BasePage<Campanha> implements OnInit {
  @ViewChildren('campanha') campanhas: QueryList<CampanhaDetailComponent>;

  constructor(private r: Router, public aC: AlertController,
              private s: StoreCampanhaService) {
    super(r, aC, s);
  }

  ngOnInit() {
    this.tName = 'Campanha';
    this.formPage = 'campanha';
  }

  expandItem(selectedItem) {
    super.expandItem(selectedItem, this.campanhas);
  }
}
