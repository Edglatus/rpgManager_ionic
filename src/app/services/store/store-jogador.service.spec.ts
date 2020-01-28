import { TestBed } from '@angular/core/testing';

import { StoreJogadorService } from './store-jogador.service';

describe('StoreJogadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreJogadorService = TestBed.get(StoreJogadorService);
    expect(service).toBeTruthy();
  });
});
