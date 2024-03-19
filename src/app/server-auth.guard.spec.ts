import { TestBed } from '@angular/core/testing';

import { ServerAuthGuard } from './server-auth.guard';

describe('ServerAuthGuard', () => {
  let guard: ServerAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ServerAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
