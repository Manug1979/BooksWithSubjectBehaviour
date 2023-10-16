import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../book-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {

  bookForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    cover: new FormControl(''),
    authorFirstname: new FormControl(''),
    authorLastname: new FormControl(''),
    releaseDate: new FormControl(''),
    pageCount: new FormControl('')
  });

  constructor(private bookService:BookService) {}

  onSubmit() {
    this.bookService.AddBook(this.bookForm.value);
    this.bookForm.reset();
  }

}

