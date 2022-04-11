import { TestBed } from '@angular/core/testing';

import { ManagerUserGuard } from './manager-user.guard';

describe('ManagerUserGuard', () => {
  let guard: ManagerUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ManagerUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
