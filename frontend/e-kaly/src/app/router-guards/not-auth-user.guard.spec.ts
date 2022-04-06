import { TestBed } from '@angular/core/testing';

import { NotAuthUserGuard } from './not-auth-user.guard';

describe('NotAuthUserGuard', () => {
  let guard: NotAuthUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotAuthUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
