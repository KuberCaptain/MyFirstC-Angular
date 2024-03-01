import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Убедитесь, что у вас есть этот файл с настройками маршрутизации

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookDetailComponent,
    BookEditComponent
    // Добавьте сюда другие компоненты по мере их создания
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Импортируйте AppRoutingModule для настройки маршрутизации
    FormsModule,      // Для работы с формами
    HttpClientModule  // Для отправки HTTP запросов
  ],
  providers: [],
  bootstrap: [AppComponent] // Корневой компонент, который будет загружаться при старте приложения
})
export class AppModule { }
