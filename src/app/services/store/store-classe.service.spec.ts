import { TestBed } from '@angular/core/testing';

import { StoreClasseService } from './store-classe.service';

describe('StoreClasseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreClasseService = TestBed.get(StoreClasseService);
    expect(service).toBeTruthy();
  });
});
