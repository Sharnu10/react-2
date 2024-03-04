import { useState } from "react";
import NavBar from "./navbar";
import Main from "./main";
import py from "../../assets/python.jpg";
import book from "../../assets/book.avif";
import book2 from "../../assets/The_Monk_Who_Sold_His_Ferrari.jpg";
import book3 from "../../assets/lord of ring.jpg";

const books = [
  {
    isbn: "978-0141033570",
    title: "To Kill a Mockingbird",
    rating: 4.5,
    year: 1960,
    publisher: "Harper Lee",
    image: py,
  },
  {
    isbn: "978-0743273565",
    title: "The Great Gatsby",
    rating: 4.2,
    year: 1925,
    publisher: "F. Scott Fitzgerald",
    image: book,
  },
  {
    isbn: "978-0451524935",
    title: "1984",
    rating: 4.6,
    year: 1949,
    publisher: "George Orwell",
    image: book2,
  },
  {
    isbn: "978-0061120084",
    title: "To Kill a Mockingbird",
    rating: 4.7,
    year: 2003,
    publisher: "HarperCollins",
    image: book3,
  },
];

export default function BooksDB() {
  const [booksData, setBooksData] = useState(books);

  return (
    <>
      <NavBar />
      <Main booksData={booksData} />
    </>
  );
}
