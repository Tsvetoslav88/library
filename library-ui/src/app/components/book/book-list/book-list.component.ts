import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book/book.service';
import { NotificationService } from 'src/app/services/common/notification.service';
import { UserStoreService } from 'src/app/services/user/user-store.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  page = 1;
  pageSize = 4;
  books: Book[];
  collectionSize;
  booksSlice: Book[];

  constructor(public bookService: BookService, 
              public userStoreSerivce: UserStoreService,
              private  notificationService: NotificationService,
              private route:ActivatedRoute) {
    console.log("Book List");

  }

  ngOnInit(): void {
    this.route.data.subscribe((response: any) => {
      console.log('Books FETCHING', response);
      this.books = response.books;
      this.collectionSize = response.length;
      this.refreshBooks();
      console.log('Books FETCHED');
    });
  }

  refreshBooks() {
    this.booksSlice = this.books
      .map((book, i) => ({index: i + 1, ...book}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  deleteBook(book: Book) {
    console.log("Into delete book method for book " + book.id);
    if(confirm("Are you sure you want to delete the book '" + book.title + "' ?")) {
      this.bookService.deleteBook(book.id).subscribe(
        data => {
          this.notificationService.showSuccess("'" + book.title + "' deleted!");
          console.log("Inside data");
          let indexNumber = this.books.findIndex(({id}) => id == book.id);
          this.books.splice(indexNumber, 1);
          this.refreshBooks();
          
        },
        error => {
          return Observable.throw(error);
        }
      )
      console.log("Outside service call");
    }
    
  }

}
