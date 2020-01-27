import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Personagem } from '../../../models/personagem';

import { ApiClasseService } from '../../../services/api-classe.service';
import { ApiJogadorService } from '../../../services/api-jogador.service';
import { ApiCampanhaService } from '../../../services/api-campanha.service';
import { ApiPersonagemService } from '../../../services/api-personagem.service';

@Component({
  selector: 'app-personagem-form',
  templateUrl: './personagem-form.page.html',
  styleUrls: ['./personagem-form.page.scss'],
})
export class PersonagemFormPage implements OnInit {
  personagem: Personagem;

  classes: any;
  campanhas: any;
  jogadores: any;

  constructor(private actRoute: ActivatedRoute, private router: Router, private api: ApiPersonagemService,
              private apiClasse: ApiClasseService, private apiJogador: ApiJogadorService, private apiCampanha: ApiCampanhaService) {
    this.personagem = new Personagem();
  }

  async ngOnInit() {
    await this.getData();
    await this.actRoute.params.subscribe(params => {
      const id: number = params.id;

      if (id == 0) {
        this.personagem.id = 0;
        this.personagem.nome = 'Novo';
        this.personagem.idClasse = 0;
        this.personagem.idJogador = 0;
        this.personagem.idCampanha = 0;
      } else {
        this.getById(id);
      }
    });
  }

  async getData() {
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
  }

  async getById(id: number) {
    await this.api.getOneByID(id)
      .subscribe(res => {
        console.log(res);
        this.personagem = res;
      }, err => {
        console.log(err);
      });
  }

  async save() {
    if (this.personagem.id === 0 || this.personagem.id == null) {
      await this.api.create(this.personagem)
        .subscribe(res => {
          this.router.navigateByUrl('/personagens');
        }, (err) => {
          console.log(err);
        });
    } else {
      await this.api.update(this.personagem.id, this.personagem)
        .subscribe(res => {
          this.router.navigateByUrl('/personagens');
        }, (err) => {
          console.log(err);
        });
    }
  }
}
