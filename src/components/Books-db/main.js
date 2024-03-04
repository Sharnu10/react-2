import ListBox from "./list-box";

export default function Main({ booksData }) {
  return (
    <div className="main">
      <ListBox booksData={booksData} />
    </div>
  );
}
