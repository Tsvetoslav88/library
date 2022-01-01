import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBooks() : Observable<Book[]> {
    return this.http.get<Book[]>('/api/v1/books');
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>('/api/v1/books/'+ id);
  }

  createBookRegistration(book) {
    let body = JSON.stringify(book);
    return this.http.post('/api/v1/books', body, httpOptions);
  }

  deleteBook(id: number) {
    return this.http.delete('/api/v1/books/' + id);
  }
}
