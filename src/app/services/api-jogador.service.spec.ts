import { TestBed } from '@angular/core/testing';

import { ApiJogadorService } from './api-jogador.service';

describe('ApiJogadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiJogadorService = TestBed.get(ApiJogadorService);
    expect(service).toBeTruthy();
  });
});
