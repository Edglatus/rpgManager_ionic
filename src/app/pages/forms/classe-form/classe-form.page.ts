import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Classe } from '../../../models/classe';
import { BaseFormPage } from '../base-form.component';

import { StoreClasseService } from '../../../services/store/store-classe.service';

@Component({
  selector: 'app-classe-form',
  templateUrl: './classe-form.page.html',
  styleUrls: ['./classe-form.page.scss'],
})
export class ClasseFormPage extends BaseFormPage<Classe> implements OnInit {

  constructor(private aR: ActivatedRoute, private r: Router, private s: StoreClasseService) {
    super(aR, r, s);
    this.object = new Classe({id: 0, nome: 'Novo'});
    this.listPage = '/classes';
  }

  ngOnInit() {
    this.getData();
  }
}
