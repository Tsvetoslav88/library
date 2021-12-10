import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { BikeService } from "../../services/bike/bike.service";

@Injectable()
export class BikeResolver implements Resolve<any> {
    constructor(private bikeService: BikeService) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        // return this.bikeService.getBikes().pipe(map(bikes => bikes));
        console.log('Called Get Bikes in resolver...', route);
        return this.bikeService.getBikes().pipe(
            catchError(error => {
                return of('No data');
            })
        );
    }

}