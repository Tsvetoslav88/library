import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Bike } from 'src/app/models/bike';
import { BikeService } from 'src/app/services/bike/bike.service';
import { UserStoreService } from 'src/app/services/user/user-store.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  page = 1;
  pageSize = 4;
  bikes: Bike[];
  collectionSize;
  bikesSlice: Bike[];

  constructor(public bikeService: BikeService, 
              public userStoreSerivce: UserStoreService) {
    console.log("Bike List");

  }

  ngOnInit(): void {
    this.bikeService.getBikes().subscribe(result => {
      this.bikes = result;
      this.collectionSize = result.length;
      this.refreshBikes();
    });

  }

  refreshBikes() {
    this.bikesSlice = this.bikes
      .map((bike, i) => ({index: i + 1, ...bike}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  deleteBike(bikeId: number) {
    console.log("Into delete bike method for bike " + bikeId);
    this.bikeService.deleteBike(bikeId).subscribe(
      data => {
        let indexNumber = this.bikes.findIndex(({id}) => id == bikeId);
        this.bikes.splice(indexNumber, 1);
        this.refreshBikes();
      },
      error => {
        return Observable.throw(error);
      }
    )
  }

}
