import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { Personagem } from '../../models/personagem';

import { StoreClasseService } from '../../services/store/store-classe.service';
import { StoreJogadorService } from '../../services/store/store-Jogador.service';
import { StoreCampanhaService } from '../../services/store/store-campanha.service';
import { StorePersonagemService } from '../../services/store/store-personagem.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  styleUrls: ['./personagens.page.scss'],
})
export class PersonagensPage implements OnInit {
  constructor(private router: Router, public aC: AlertController,
              private store: StorePersonagemService, private sCa: StoreCampanhaService,
              private sCl: StoreClasseService, private sJo: StoreJogadorService) {
  }

  ngOnInit() {
    // await this.getAll();
  }

  addPersonagem() {
    this.router.navigate(['/personagem-form', 0]);
  }

  editPersonagem(id: number) {
    this.router.navigate(['/personagem-form', id]);
  }

  deletePersonagem(id: number) {
    this.store.delete(id);
  }

  expandItem(selectedItem) {
    // if (selectedItem.expanded === true) {
    //   selectedItem.expanded = false;
    // } else {
    //   console.log(this.personagens);
    //
    //   this.personagens.map( item => {
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

  async presentDeletePrompt(object: Personagem) {
    const alert = await this.aC.create({
      header: 'Excluir Personagem',
      message: 'Excluir ' + object.nome + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          handler: () => {
            this.deletePersonagem(object.id);
          }
        }
      ]
    });

    await alert.present();
  }
}
