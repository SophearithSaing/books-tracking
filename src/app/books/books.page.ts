import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books: Array<Book>;

  constructor() {}

  ngOnInit() {
    }

}
