import { TestBed } from '@angular/core/testing';

import { ApiCampanhaService } from './api-campanha.service';

describe('ApiCampanhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCampanhaService = TestBed.get(ApiCampanhaService);
    expect(service).toBeTruthy();
  });
});
