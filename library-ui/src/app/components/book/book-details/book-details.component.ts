import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book/book.service';
import { UserStoreService } from 'src/app/services/user/user-store.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public book: Book;

  constructor(private bookService: BookService, 
              private route: ActivatedRoute, 
              public userStoreSerivce: UserStoreService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
      this.bookService.getBook(Number(params.get('id'))).subscribe(book => {
        console.log(book);
        this.book = book;
      })
    });
  }

}
