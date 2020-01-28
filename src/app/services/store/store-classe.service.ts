import { Injectable } from '@angular/core';

import { StoreService } from './store.service';
import { ApiClasseService } from '../api/api-classe.service';

import { Classe } from '../../models/classe';

@Injectable({
  providedIn: 'root'
})
export class StoreClasseService extends StoreService<Classe> {

  constructor(private apiClasse: ApiClasseService) {
    super(apiClasse);
  }

  protected toArray(res) {
    const array = (res as object[])
      .map((c: any) => {
        return new Classe({id: c.id, nome: c.nome});
      });

    return array;
  }
}
