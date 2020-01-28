import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { Campanha } from '../../models/campanha';

@Injectable({
  providedIn: 'root'
})
export class ApiCampanhaService extends ApiService<Campanha> {

  constructor(Http: HttpClient) {
    super(Http);
    this.apiUrl += 'campanhas';
  }
}
