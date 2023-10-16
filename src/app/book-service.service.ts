import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private defaultBookList: Book[] = [
      { title: 'The Hobbit', cover: '📙', author_firstname: 'J.R.R', author_lastname: 'Tolkien', pageCount: 184, releaseDate: '1937'},
      { title: 'The Two Towers', cover: '📕', author_firstname: 'J.R.R', author_lastname: 'Tolkien', pageCount: 294, releaseDate: '1954'},
      { title: 'The Return of the King', cover: '📗', author_firstname: 'J.R.R', author_lastname: 'Tolkien', pageCount: 347, releaseDate: '1955'},
      { title: 'The Silmarillion', cover: '📘', author_firstname: 'J.R.R', author_lastname: 'Tolkien', pageCount: 411, releaseDate: '1977'}
  ]
  private bookList: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(this.defaultBookList);
  public readonly bookList$: Observable<Book[]> = this.bookList.asObservable();


  AddBook(book:Book){
    const bookList = this.bookList.getValue();
    bookList.push(book);
    this.bookList.next(bookList);
  }
}
