import { TestBed } from '@angular/core/testing';

import { CanActivateLogueoGuard } from './can-activate-logueo.guard';

describe('CanActivateLogueoGuard', () => {
  let guard: CanActivateLogueoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateLogueoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
