import { Component, OnInit } from '@angular/core';
import {Book} from '/home/ari/Documents/BookProject/BookFrontend/src/app/book'
import { BookService } from '../book.service.spec';
import { Router } from '@angular/router';


@Component({
  selector: 'app-books-list',                  // Селектор компонента
  templateUrl: './books-list.component.html',  // Путь к HTML шаблону
  styleUrls: ['./books-list.component.css']    // Путь к CSS стилям
})

export class BooksListComponent implements OnInit {
  books: Book[] = [];
  searchTerm: string;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  viewBook(id: number) {
    this.router.navigate(['/book', id]);
  }
}
