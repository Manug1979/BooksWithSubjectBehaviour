import { Component, OnInit } from '@angular/core';
import { BookService } from './book-service.service';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from './book.model';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {
  bookList$: Observable<Book[]> | undefined;
  bookList: Book[]= [];
  constructor(private bookService:BookService) {}
  

  ngOnInit(): void {
     this.bookList$ = this.bookService.bookList$;
     this.bookList$.subscribe(bookList => this.bookList = bookList)
  }
}

