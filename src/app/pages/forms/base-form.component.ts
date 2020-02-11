import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'app-base-form'
})
export class BaseFormPage<T extends {id: number}> {
  protected object: T;
  protected listPage: string;

  constructor(private actRoute: ActivatedRoute, private router: Router,
              private store: StoreService<T>) { }

  async getData() {
    await this.actRoute.params.subscribe(params => {
      const id: number = params.id;

      if (id != 0 && id !== null && id !== undefined) {
        this.getById(id);
      }
    });
  }

  async getById(id: number) {
    await this.store.getOneByID(id)
      .subscribe(res => {
        console.log(res);
        this.object = res;
      }, err => {
        console.log(err);
      });
  }

  async save() {
    if (this.object.id === 0 || this.object.id == null) {
      await this.store.create(this.object);
      this.router.navigateByUrl(this.listPage);
    } else {
      await this.store.update(this.object.id, this.object);
      this.router.navigateByUrl(this.listPage);
    }
  }
}
