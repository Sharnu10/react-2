import { Schema, model } from "mongoose";

// interface Book {
//   isbn: string;
//   title: string;
//   rating: Number;
//   year: Number;
//   publisher: string;
//   image?: {
//     data: Buffer,
//     contentType: string,
//   };
// }

const BookSchema = new Schema({
  isbn: { type: String, requiret: true },
  title: String,
  rating: Number,
  year: Number,
  publisher: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});

export const BookModel = model("Book", BookSchema);
