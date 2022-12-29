import { TestBed } from '@angular/core/testing';

import { FoodserveService } from './foodserve.service';

describe('FoodserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodserveService = TestBed.get(FoodserveService);
    expect(service).toBeTruthy();
  });
});
