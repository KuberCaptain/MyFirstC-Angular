export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe((data: Book) => {
      this.book = data;
    });
  }

  editBook(id: number) {
    this.router.navigate(['/edit-book', id]);
  }
}
