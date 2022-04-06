import { TestBed } from '@angular/core/testing';

import { DeliveryManUserGuard } from './delivery-man-user.guard';

describe('DeliveryManUserGuard', () => {
  let guard: DeliveryManUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeliveryManUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
