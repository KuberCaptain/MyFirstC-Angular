import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirst'; // Добавлено свойство title
  books: any[] = []; // Предполагается, что books - массив объектов книг
  newBook: any = {}; // Инициализация newBook объекта для добавления новой книги

  onFileSelected(event: any) {
    // Реализация выбора файла
  }

  uploadBook(event: any) {
    event.preventDefault(); // Предотвращение стандартного поведения формы
    // Реализация логики добавления книги
  }
}
