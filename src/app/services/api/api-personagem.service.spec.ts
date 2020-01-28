import { TestBed } from '@angular/core/testing';

import { ApiPersonagemService } from './api-personagem.service';

describe('ApiPersonagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPersonagemService = TestBed.get(ApiPersonagemService);
    expect(service).toBeTruthy();
  });
});
