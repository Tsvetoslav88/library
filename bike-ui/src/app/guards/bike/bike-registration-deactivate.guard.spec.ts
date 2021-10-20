import { TestBed } from '@angular/core/testing';

import { BikeRegistrationDeactivateGuard } from './bike-registration-deactivate.guard';

describe('BikeRegistrationDeactivateGuard', () => {
  let guard: BikeRegistrationDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BikeRegistrationDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
