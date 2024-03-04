export default function Book({ book }) {
  return (
    <li className="book" key={book.isbn}>
      <img src={book.image} alt={book.image} />
      <div className="bookDetail">
        <h3>{book.title}</h3>
        <div>Year: {book.year}</div>
      </div>
    </li>
  );
}
