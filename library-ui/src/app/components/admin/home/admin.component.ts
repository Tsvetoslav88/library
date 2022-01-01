import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public bikes;

  constructor(private bikeService: BookService) { }

  ngOnInit(): void {
    // this.getBikes();
  }

  // getBikes() {
  //   this.bikeService.getBikes().subscribe(
  //     data => { this.bikes = data},
  //     err => console.error(err),
  //     () => console.log('bike loeaded')
  //   );
  // }

}
