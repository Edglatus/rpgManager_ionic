import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { Campanha } from '../../models/campanha';

import { StoreJogadorService } from '../../services/store/store-Jogador.service';
import { StoreCampanhaService } from '../../services/store/store-campanha.service';
import { StorePersonagemService } from '../../services/store/store-personagem.service';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.page.html',
  styleUrls: ['./campanhas.page.scss'],
})
export class CampanhasPage implements OnInit {

  constructor(private router: Router, private store: StoreCampanhaService, public aC: AlertController,
              private sJo: StoreJogadorService, private sPe: StorePersonagemService) {
  }

  ngOnInit() {
  }

  addCampanha() {
    this.router.navigate(['/campanha-form', 0]);
  }

  editCampanha(id: number) {
    this.router.navigate(['/campanha-form', id]);
  }

  async deleteCampanha(id: number) {
    await this.store.delete(id);
  }

  expandItem(selectedItem) {
    // if (selectedItem.expanded === true) {
    //   selectedItem.expanded = false;
    // } else {
    //   this.campanhas.map( item => {
    //     if (item === selectedItem) {
    //       item.expanded = true;
    //     } else {
    //       item.expanded = false;
    //     }
    //     return item;
    //   });
    // }
    selectedItem.expanded = !selectedItem.expanded;
  }

  async presentDeletePrompt(object: Campanha) {
    const alert = await this.aC.create({
      header: 'Excluir Campanha',
      message: 'Excluir ' + object.nome + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          handler: () => {
            this.deleteCampanha(object.id);
          }
        }
      ]
    });

    await alert.present();
  }
}
