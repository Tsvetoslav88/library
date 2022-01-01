import { TestBed } from '@angular/core/testing';

import { BookRegistrationDeactivateGuard as BookRegistrationDeactivateGuard } from './book-registration-deactivate.guard';

describe('BookRegistrationDeactivateGuard', () => {
  let guard: BookRegistrationDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookRegistrationDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
