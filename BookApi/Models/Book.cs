namespace BookApi.Models
{
    public class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string AuthorName { get; set; }
        public string Description { get; set; }
        public int? PublishedYear { get; set; }
        public string Genre { get; set; }
    }
}
