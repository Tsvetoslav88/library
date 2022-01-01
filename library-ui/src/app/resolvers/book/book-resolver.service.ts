import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { BookService } from "../../services/book/book.service";

@Injectable()
export class BookResolver implements Resolve<any> {
    constructor(private bookService: BookService) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        // return this.bookService.getBooks().pipe(map(books => books));
        console.log('Called Get Books in resolver...', route);
        return this.bookService.getBooks().pipe(
            catchError(error => {
                return of('No data');
            })
        );
    }

}