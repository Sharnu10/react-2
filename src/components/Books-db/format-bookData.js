export default function FormatBookResponse(booksData) {
  let books = [];

  for (let item = 0; item < booksData.length; item++) {
    let book = {
      _id: booksData[item]._id,
      isbn: booksData[item].isbn,
      title: booksData[item].title,
      rating: booksData[item].rating,
      year: booksData[item].year,
      publisher: booksData[item].publisher,
      image: booksData[item].image || "",
    };
    books.push(book);
  }
  return books;
}
