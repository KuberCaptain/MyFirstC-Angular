import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Для использования [(ngModel)]

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Декларирует AppComponent в приложении
  ],
  imports: [
    BrowserModule, // Предоставляет сервисы, необходимые для запуска приложения в браузере
    FormsModule // Позволяет использовать функциональность форм, включая [(ngModel)]
  ],
  providers: [], // Здесь можно добавить сервисы, которые будут доступны во всем приложении
  bootstrap: [AppComponent] // Задает корневой компонент, который вызывается при запуске приложения
})
export class AppModule { }
