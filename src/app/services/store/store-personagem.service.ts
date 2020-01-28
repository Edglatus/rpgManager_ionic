import { Injectable } from '@angular/core';

import { StoreService } from './store.service';
import { ApiPersonagemService } from '../api/api-personagem.service';

import { Personagem } from '../../models/personagem';

@Injectable({
  providedIn: 'root'
})
export class StorePersonagemService extends StoreService<Personagem> {

  constructor(private apiPersonagem: ApiPersonagemService) {
    super(apiPersonagem);
  }

  protected toArray(res) {
    const array = (res as object[])
      .map((p: any) => {
        return new Personagem({id: p.id, nome: p.nome, idJogador: p.idJogador, idClasse: p.idClasse, idCampanha: p.idCampanha});
      });

    return array;
  }
}
