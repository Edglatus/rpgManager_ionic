import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { Classe } from '../../models/classe';
import { ClasseDetailComponent } from './classe.component';
import { BasePageComponent } from '../../components/base-page/base-page.component';

import { StoreClasseService } from '../../services/store/store-classe.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage extends BasePageComponent<Classe> implements OnInit {
  @ViewChildren('classe') classes: QueryList<ClasseDetailComponent>;

  constructor(private r: Router, public aC: AlertController,
              private s: StoreClasseService) {
    super(r, aC, s);
  }

  ngOnInit() {
    this.tName = 'Classe'
    this.formPage = '/classe-form';
  }

  expandItem(selectedItem) {
    super.expandItem(selectedItem, this.classes);
  }
}
