import Book from "./book";

export default function BooksList({ booksData, showRating, handleSelectedId }) {
  return (
    <ul className="books-list">
      {booksData &&
        booksData.map((book) => (
          <Book
            book={book}
            key={book.isbn}
            showRating={showRating}
            handleSelectedId={() => handleSelectedId(book._id)}
          />
        ))}
    </ul>
  );
}
