import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { Personagem } from '../../models/personagem';
import { PersonagemDetailComponent } from './personagem.component';

import { StorePersonagemService } from '../../services/store/store-personagem.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  styleUrls: ['./personagens.page.scss'],
})
export class PersonagensPage implements OnInit {
  @ViewChildren('personagem') personagens: QueryList<PersonagemDetailComponent>;

  constructor(private router: Router, public aC: AlertController,
              private store: StorePersonagemService) {
  }

  ngOnInit() {
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
    if (selectedItem.expanded === true) {
      selectedItem.expanded = false;
    } else {
      this.personagens.toArray().forEach( item => {
        if (item !== selectedItem) {
          item.expanded = false;
        }
        return item;
      });
      selectedItem.expanded = true;
    }
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
