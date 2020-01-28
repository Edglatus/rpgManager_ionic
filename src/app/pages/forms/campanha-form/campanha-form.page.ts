import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Campanha } from '../../../models/campanha';

import { StoreCampanhaService } from '../../../services/store/store-campanha.service';

@Component({
  selector: 'app-campanha-form',
  templateUrl: './campanha-form.page.html',
  styleUrls: ['./campanha-form.page.scss'],
})
export class CampanhaFormPage implements OnInit {
  campanha: Campanha;

  campanhas: any;

  constructor(private actRoute: ActivatedRoute, private router: Router, private store: StoreCampanhaService) {
    this.campanha = new Campanha({id: 0, nome: 'Novo', cdate: new Date()});
  }

  async ngOnInit() {
    await this.actRoute.params.subscribe(params => {
      const id: number = params.id;

      if (id != 0) {
        this.getById(id);
      }
    });
  }

  async getById(id: number) {
    await this.store.getOneByID(id)
      .subscribe(res => {
        console.log(res);
        this.campanha = res;
      }, err => {
        console.log(err);
      });
  }

  async save() {
    if (this.campanha.id === 0 || this.campanha.id == null) {
      await this.store.create(this.campanha);
      this.router.navigateByUrl('/campanhas');
    } else {
      await this.store.update(this.campanha.id, this.campanha);
      this.router.navigateByUrl('/campanhas');
    }
  }
}
