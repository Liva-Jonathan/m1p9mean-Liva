import { TestBed } from '@angular/core/testing';

import { ClientUserGuard } from './client-user.guard';

describe('ClientUserGuard', () => {
  let guard: ClientUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClientUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
