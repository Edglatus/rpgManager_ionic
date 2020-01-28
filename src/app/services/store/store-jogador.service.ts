import { Injectable } from '@angular/core';

import { StoreService } from './store.service';
import { ApiJogadorService } from '../api/api-jogador.service';

import { Jogador } from '../../models/jogador';

@Injectable({
  providedIn: 'root'
})
export class StoreJogadorService extends StoreService<Jogador> {

  constructor(private apiJogador: ApiJogadorService) {
    super(apiJogador);
  }

  protected toArray(res) {
    const array = (res as object[])
      .map((j: any) => {
        return new Jogador({id: j.id, nome: j.nome});
      });

    return array;
  }
}
