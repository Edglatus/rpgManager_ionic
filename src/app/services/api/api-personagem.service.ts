import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { Personagem } from '../../models/personagem';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonagemService extends ApiService<Personagem> {

  constructor(Http: HttpClient) {
    super(Http);
    this.apiUrl += 'personagens';
  }
}
