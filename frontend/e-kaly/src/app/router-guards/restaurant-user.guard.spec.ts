import { TestBed } from '@angular/core/testing';

import { RestaurantUserGuard } from './restaurant-user.guard';

describe('RestaurantUserGuard', () => {
  let guard: RestaurantUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestaurantUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
