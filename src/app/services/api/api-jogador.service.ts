import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { Jogador } from '../../models/jogador';

@Injectable({
  providedIn: 'root'
})
export class ApiJogadorService extends ApiService<Jogador> {

  constructor(Http: HttpClient) {
    super(Http);
    this.apiUrl += 'jogadores';
  }
}
