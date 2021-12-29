import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BikeService } from 'src/app/services/bike/bike.service';

@Component({
  selector: 'app-bike-registration',
  templateUrl: './bike-registration.component.html',
  styleUrls: ['./bike-registration.component.css']
})
export class BikeRegistrationComponent implements OnInit {

  models: string[] = [
    'Global Suspension',
    'Global Carbon Fiber',
    'Global Time Trial Blade'
  ];

  bikeform: FormGroup;
  validMessage: string = "";

  constructor(private bikeService: BikeService,
              private router: Router) {
    console.log("Bike Registration Component");
   }

  ngOnInit(): void {
    this.bikeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() {

    if (this.bikeform.valid) {
      this.validMessage = "Your bike registration has been submitted. Thank you!";
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
        data => {
          this.bikeform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }


  cancel() {
    this.router.navigate(['/bikes/list']);
  }

}
