using Microsoft.EntityFrameworkCore;
using BookApi.Models; // Импортируйте вашу модель
using Microsoft.Extensions.DependencyInjection;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Добавление сервисов в контейнер
builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Настройка Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Настройка конвейера HTTP запросов
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Добавьте маршруты для вашего API
app.MapGet("/api/books", async (ApplicationDbContext context) =>
{
    return await context.Books.ToListAsync();
});

app.MapGet("/api/books/{id}", async (int id, ApplicationDbContext context) =>
{
    return await context.Books.FindAsync(id) is Book book ? Results.Ok(book) : Results.NotFound();
});

app.MapPost("/api/books", async (Book book, ApplicationDbContext context) =>
{
    context.Books.Add(book);
    await context.SaveChangesAsync();

    return Results.Created($"/api/books/{book.BookId}", book);
});

app.MapPut("/api/books/{id}", async (int id, Book inputBook, ApplicationDbContext context) =>
{
    var book = await context.Books.FindAsync(id);

    if (book == null) return Results.NotFound();

    book.Title = inputBook.Title;
    book.AuthorName = inputBook.AuthorName;
    book.Description = inputBook.Description;
    // Обновите остальные поля модели здесь

    await context.SaveChangesAsync();

    return Results.NoContent();
});

app.MapDelete("/api/books/{id}", async (int id, ApplicationDbContext context) =>
{
    if (await context.Books.FindAsync(id) is Book book)
    {
        context.Books.Remove(book);
        await context.SaveChangesAsync();
        return Results.Ok(book);
    }

    return Results.NotFound();
});

app.Run();
