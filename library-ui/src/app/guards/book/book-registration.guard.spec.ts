import { TestBed } from '@angular/core/testing';

import { BookRegistrationGuard } from './book-registration.guard';

describe('BookRegistrationGuard', () => {
  let guard: BookRegistrationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookRegistrationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
