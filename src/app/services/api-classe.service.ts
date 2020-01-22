import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { Classe } from '../models/classe';

@Injectable({
  providedIn: 'root'
})
export class ApiClasseService extends ApiService<Classe> {

  constructor(Http: HttpClient) {
    super(Http);
    this.apiUrl += 'classes';
  }
}
