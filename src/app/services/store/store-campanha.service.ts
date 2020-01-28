import { Injectable } from '@angular/core';

import { StoreService } from './store.service';
import { ApiCampanhaService } from '../api/api-campanha.service';

import { Campanha } from '../../models/campanha';

@Injectable({
  providedIn: 'root'
})
export class StoreCampanhaService extends StoreService<Campanha> {

  constructor(private apiCampanha: ApiCampanhaService) {
    super(apiCampanha);
  }

  protected toArray(res) {
    const array = (res as object[])
      .map((c: any) => {
        return new Campanha({id: c.id, cdate: c.cdate, nome: c.nome});
      });

    return array;
  }
}
