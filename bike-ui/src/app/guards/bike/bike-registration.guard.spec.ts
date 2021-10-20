import { TestBed } from '@angular/core/testing';

import { BikeRegistrationGuard } from './bike-registration.guard';

describe('BikeRegistrationGuard', () => {
  let guard: BikeRegistrationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BikeRegistrationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
