import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getBooks(query: string) {
    const url = `${this.apiUrl}?q=${query}&key=${this.apiKey}`;
    return this.http.get<{ totalItems: number, items: Array<Book> }>(url);
  }

  getBook(id: string) {
    const url = `${this.apiUrl}/q=${id}&key=${this.apiKey}`;
    return this.http.get<Book>(url);
  }
}
