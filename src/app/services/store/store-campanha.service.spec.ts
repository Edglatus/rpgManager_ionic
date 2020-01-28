import { TestBed } from '@angular/core/testing';

import { StoreCampanhaService } from './store-campanha.service';

describe('StoreCampanhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreCampanhaService = TestBed.get(StoreCampanhaService);
    expect(service).toBeTruthy();
  });
});
