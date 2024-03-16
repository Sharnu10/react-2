// 2857;

import { useEffect, useState } from "react";

import NavBar from "./navbar";
import Main from "./main";
import NumberResult from "./Number";
import ListBox from "./list-box";
import BooksList from "./books-list";
import BookSummary from "./book-summary";
import BooksRead from "./books-read";
import FormatBookResponse from "./format-bookData";
import py from "../../assets/python.png";
import book from "../../assets/The_Monk_Who_Sold_His_Ferrari.jpg";
import book2 from "../../assets/book.avif";
import book3 from "../../assets/lord of ring.jpg";
import Loader from "./loader";
import ErrorMessage from "./error-msg";
import Search from "./Search";
import BookDetails from "./book-detail";

const books = [
  {
    isbn: "978-0141033570",
    title: "bird",
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
    title: "bird",
    rating: 4.7,
    year: 2003,
    publisher: "HarperCollins",
    image: book3,
  },
];
const booksRead = [
  {
    isbn: "978-0141033570",
    title: "bird",
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
    title: "bird",
    rating: 4.7,
    year: 2003,
    publisher: "HarperCollins",
    image: book3,
  },
];

export default function BooksDB() {
  const [booksData, setBooksData] = useState(books);
  const [booksReadData, setBooksReadData] = useState(booksRead);
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");

  function handleBtnToggle() {
    setIsOpen(!isOpen);
  }

  function handleSelectedId(id) {
    setSelectedId((selectedId) => (selectedId === id ? "" : id));
  }

  function handleBack() {
    setSelectedId("");
  }

  async function fetchPosts() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/book/booksList?q=${query}`
      );
      const data = await response.json();
      if (!data) throw new Error("No Books Data Available!");
      setBooksData(FormatBookResponse(data));
      setBooksReadData(FormatBookResponse(data));
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumberResult books={booksData} />
      </NavBar>
      <Main>
        <ListBox showData={isOpen} handleBtnToggle={handleBtnToggle}>
          {isLoading && <Loader />}
          {!isLoading && !errorMessage && (
            <BooksList
              booksData={booksData}
              handleSelectedId={handleSelectedId}
            />
          )}
          {errorMessage && <ErrorMessage message={errorMessage} />}
        </ListBox>
        <ListBox showData={isOpen} handleBtnToggle={handleBtnToggle}>
          {selectedId ? (
            <BookDetails selectedId={selectedId} handleBack={handleBack} />
          ) : (
            <>
              <BookSummary />
              <BooksRead booksReadData={booksReadData} />
            </>
          )}
        </ListBox>
      </Main>
    </>
  );
}
