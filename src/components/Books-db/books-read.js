import BooksList from "./books-list";

export default function BooksRead({ booksReadData }) {
  return (
    <div className="book-read-data">
      <BooksList booksData={booksReadData} showRating={true} />
    </div>
  );
}
