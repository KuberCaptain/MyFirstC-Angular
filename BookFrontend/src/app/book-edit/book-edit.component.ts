export class BookEditComponent implements OnInit {
  book: Book = { id: null, title: '', author: '', description: '' };

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBookById(id).subscribe((data: Book) => {
        this.book = data;
      });
    }
  }

  saveBook() {
    if (this.book.id) {
      this.bookService.updateBook(this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    } else {
      this.bookService.addBook(this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
}
