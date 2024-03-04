import Book from "./book";

export default function BooksList({ booksData }) {
  return (
    <ul className="books-list">
      {booksData.map((book) => (
        <Book book={book} key={book.isbn} />
      ))}
    </ul>
  );
}
