import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, QueryList } from '@angular/core';

import { BaseDetailsComponent } from './base-details.component';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'app-base-page'
})
export class BasePageComponent<T extends {id: number, nome: string}> {
  protected tName: string;
  protected formPage: string;

  constructor(private router: Router, public alertC: AlertController,
              private store: StoreService<T>) { }


  protected add() {
    this.router.navigate([this.formPage, 0]);
  }
  protected edit(id: number) {
    this.router.navigate([this.formPage, id]);
  }
  protected delete(id: number) {
    this.store.delete(id);
  }

  protected async presentDeletePrompt(object: T) {
    const alert = await this.alertC.create({
      header: 'Excluir ' + this.tName,
      message: 'Excluir ' + object.nome + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          handler: () => {
            this.delete(object.id);
          }
        }
      ]
    });

    await alert.present();
  }

  protected expandItem(selectedItem: BaseDetailsComponent<T>,
                       array: QueryList<BaseDetailsComponent<T>>) {
    if (selectedItem.expanded === true) {
      selectedItem.expanded = false;
    } else {
      array.toArray().forEach( item => {
        if (item !== selectedItem) {
          item.expanded = false;
        }
        return item;
      });
      selectedItem.expanded = true;
    }
  }
}
