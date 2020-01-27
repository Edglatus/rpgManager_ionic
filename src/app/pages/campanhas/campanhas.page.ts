import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { Campanha } from '../../models/campanha';

import { ApiJogadorService } from '../../services/api-jogador.service';
import { ApiCampanhaService } from '../../services/api-campanha.service';
import { ApiPersonagemService } from '../../services/api-personagem.service';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.page.html',
  styleUrls: ['./campanhas.page.scss'],
})
export class CampanhasPage implements OnInit {
  personagens: any;
  campanhas: any;
  jogadores: any;

  constructor(private router: Router, private api: ApiPersonagemService, public aC: AlertController,
              private apiJogador: ApiJogadorService, private apiCampanha: ApiCampanhaService) {
  }

  async ngOnInit() {
    await this.getAll();
  }

  ionViewWillEnter() {
    this.getAll();
  }

  async getAll() {
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

  addCampanha() {
    this.router.navigate(['/campanha-form', 0]);
  }

  editCampanha(id: number) {
    this.router.navigate(['/campanha-form', id]);
  }

  async deleteCampanha(id: number) {
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
      this.campanhas.map( item => {
        if (item === selectedItem) {
          item.expanded = true;
        } else {
          item.expanded = false;
        }
        return item;
      });
    }
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

  getPersonagensByCampanha(idCampanha: number) {
    if (this.personagens != null) {
      return this.personagens.filter(p => p.idCampanha === idCampanha);
    }
  }

  getJogadoresByCampanha(idCampanha: number) {
    if (this.personagens != null) {
      const personagens = this.getPersonagensByCampanha(idCampanha);
      const idJogadores = personagens.map(p => p.idJogador);

      return this.jogadores.filter(j => idJogadores.includes(j.id));
    }
  }
}
