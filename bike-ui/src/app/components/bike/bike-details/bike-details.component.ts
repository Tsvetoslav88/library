import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bike } from 'src/app/models/bike';
import { BikeService } from 'src/app/services/bike/bike.service';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {

  public bike: Bike;

  constructor(private bikeService: BikeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
      this.bikeService.getBike(Number(params.get('id'))).subscribe(bike => {
        console.log(bike);
        this.bike = bike;
      })
    });
  }

}
