import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Campanha } from '../../../models/campanha';
import { BaseFormPage } from '../base-form.component';

import { StoreCampanhaService } from '../../../services/store/store-campanha.service';

@Component({
  selector: 'app-campanha-form',
  templateUrl: './campanha-form.page.html',
  styleUrls: ['./campanha-form.page.scss'],
})
export class CampanhaFormPage extends BaseFormPage<Campanha> implements OnInit {

  constructor(private aR: ActivatedRoute, private r: Router, private s: StoreCampanhaService) {
    super(aR, r, s);
    this.object = new Campanha({id: 0, nome: 'Nova Campanha', cdate: undefined});
    this.listPage = '/campanhas';
  }

  ngOnInit() {
    this.getData();
  }
}
