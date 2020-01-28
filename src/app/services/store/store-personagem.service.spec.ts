import { TestBed } from '@angular/core/testing';

import { StorePersonagemService } from './store-personagem.service';

describe('StorePersonagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorePersonagemService = TestBed.get(StorePersonagemService);
    expect(service).toBeTruthy();
  });
});
