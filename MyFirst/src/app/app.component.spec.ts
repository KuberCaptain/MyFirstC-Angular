import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // FormsModule импортирован для использования [(ngModel)]

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // AppComponent объявлен в секции declarations
      imports: [FormsModule], // FormsModule добавлен в секцию imports
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MyFirst'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MyFirst'); // Тест на проверку свойства title
  });

  it('should render title in an h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Вызовите detectChanges для обновления представления компонента
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to my Book Page!'); // Убедитесь, что текст соответствует тому, что в шаблоне
  });
});
