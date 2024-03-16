export default function Book({ book, showRating, handleSelectedId }) {
  return (
    <li className="book" key={book.isbn} onClick={handleSelectedId}>
      <img src={book.image} alt={book.image} />
      <div className="bookDetail">
        <h3>{book.title}</h3>
        <div>Year: {book.year}</div>
        {showRating ? (
          <div className="d-flex justify-content-around">
            <div>
              <span>⭐</span>
              <span>{book.rating}</span>
            </div>

            <div>
              <span>⭐</span>
              <span>{book.rating}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </li>
  );
}
