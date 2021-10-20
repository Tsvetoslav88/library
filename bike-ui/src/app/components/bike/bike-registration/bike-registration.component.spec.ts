import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeRegistrationComponent } from './bike-registration.component';

describe('BikeRegistrationComponent', () => {
  let component: BikeRegistrationComponent;
  let fixture: ComponentFixture<BikeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
