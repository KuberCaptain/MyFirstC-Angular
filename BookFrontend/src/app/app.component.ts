import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books: Book[] = [];
  searchTerm: string = '';

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
