import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  books: Array<Book>;

  constructor(private booksServices: BooksService) { }

  ngOnInit() {
  }

  search(query: string) {
    this.booksServices.getBooks(query).subscribe(result => {
      this.books = result.items;
    });
  }

}
