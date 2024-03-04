import BooksList from "./books-list";

export default function ListBox({ booksData }) {
  return (
    <div className="box">
      <BooksList booksData={booksData} />
    </div>
  );
}
