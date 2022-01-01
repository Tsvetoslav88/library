import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent implements OnInit {

  models: string[] = [
    'Global Suspension',
    'Global Carbon Fiber',
    'Global Time Trial Blade'
  ];

  bookform: FormGroup;
  validMessage: string = "";

  constructor(private bookService: BookService,
              private router: Router) {
    console.log("Book Registration Component");
   }

  ngOnInit(): void {
    this.bookform = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {

    if (this.bookform.valid) {
      this.validMessage = "Your book registration has been submitted. Thank you!";
      this.bookService.createBookRegistration(this.bookform.value).subscribe(
        data => {
          this.bookform.reset();
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
