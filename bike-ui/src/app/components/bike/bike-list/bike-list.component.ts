import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Bike } from 'src/app/models/bike';
import { BikeService } from 'src/app/services/bike/bike.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  public bikes$: Observable<Bike[]>;

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.bikes$=this.bikeService.getBikes();
  }

}
