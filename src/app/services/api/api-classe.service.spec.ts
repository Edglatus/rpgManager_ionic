import { TestBed } from '@angular/core/testing';

import { ApiClasseService } from './api-classe.service';

describe('ApiClasseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiClasseService = TestBed.get(ApiClasseService);
    expect(service).toBeTruthy();
  });
});
