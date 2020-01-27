import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { Personagem } from '../../models/personagem';

import { ApiClasseService } from '../../services/api-classe.service';
import { ApiJogadorService } from '../../services/api-jogador.service';
import { ApiCampanhaService } from '../../services/api-campanha.service';
import { ApiPersonagemService } from '../../services/api-personagem.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  styleUrls: ['./personagens.page.scss'],
})
export class PersonagensPage implements OnInit {
  personagens: any;
  campanhas: any;
  jogadores: any;
  classes: any;

  constructor(private router: Router, private api: ApiPersonagemService, public aC: AlertController,
              private apiClasse: ApiClasseService, private apiJogador: ApiJogadorService, private apiCampanha: ApiCampanhaService) {
  }

  async ngOnInit() {
    await this.getAll();
  }

  ionViewWillEnter() {
    this.getAll();
  }

  async getAll() {
    await this.apiClasse.getAll()
      .subscribe(res => {
        this.classes = res;
      }, err => {
        console.log(err);
      });

    await this.apiJogador.getAll()
      .subscribe(res => {
        this.jogadores = res;
      }, err => {
        console.log(err);
      });

    await this.apiCampanha.getAll()
      .subscribe(res => {
        this.campanhas = res;
      }, err => {
        console.log(err);
      });

    await this.api.getAll()
      .subscribe(res => {
        this.personagens = res;
      }, err => {
        console.log(err);
      });
  }

  addPersonagem() {
    this.router.navigate(['/personagem-form', 0]);
  }

  editPersonagem(id: number) {
    this.router.navigate(['/personagem-form', id]);
  }

  async deletePersonagem(id: number) {
    await this.api.delete(id)
      .subscribe(res => {
        console.log(res);
        this.getAll();
      }, err => {
        console.log(err);
      });
  }

  expandItem(selectedItem) {
    if (selectedItem.expanded === true) {
      selectedItem.expanded = false;
    } else {
      this.personagens.map( item => {
        if (item === selectedItem) {
          item.expanded = true;
        } else {
          item.expanded = false;
        }
        return item;
      });
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
