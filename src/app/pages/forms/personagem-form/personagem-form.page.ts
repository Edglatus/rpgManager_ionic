import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Personagem } from '../../../models/personagem';

import { StoreClasseService } from '../../../services/store/store-classe.service';
import { StoreJogadorService } from '../../../services/store/store-jogador.service';
import { StoreCampanhaService } from '../../../services/store/store-campanha.service';
import { StorePersonagemService } from '../../../services/store/store-personagem.service';

@Component({
  selector: 'app-personagem-form',
  templateUrl: './personagem-form.page.html',
  styleUrls: ['./personagem-form.page.scss'],
})
export class PersonagemFormPage implements OnInit {
  personagem: Personagem;

  constructor(private actRoute: ActivatedRoute, private router: Router,
              private store: StorePersonagemService, private sCa: StoreCampanhaService,
              private sCl: StoreClasseService, private sJo: StoreJogadorService) {
    this.personagem = new Personagem({id: 0, nome: 'Novo', idClasse: 0, idJogador: 0, idCampanha: 0});
  }

  async ngOnInit() {
    await this.actRoute.params.subscribe(params => {
      const id: number = params.id;

      if (id != 0 && id !== null) {
        this.getById(id);
      }
    });
  }

  async getById(id: number) {
    await this.store.getOneByID(id)
      .subscribe(res => {
        console.log(res);
        this.personagem = res;
      }, err => {
        console.log(err);
      });
  }

  async save() {
    if (this.personagem.id === 0 || this.personagem.id == null) {
      await this.store.create(this.personagem);
      this.router.navigateByUrl('/personagens');
    } else {
      await this.store.update(this.personagem.id, this.personagem);
      this.router.navigateByUrl('/personagens');
    }
  }
}
