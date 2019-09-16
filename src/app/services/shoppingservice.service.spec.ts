import { TestBed } from '@angular/core/testing';

import { ShoppingserviceService } from './shoppingservice.service';

describe('ShoppingserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingserviceService = TestBed.get(ShoppingserviceService);
    expect(service).toBeTruthy();
  });
});
