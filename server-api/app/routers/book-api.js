import { Router } from "express";
import multer from "multer";

import { books } from "../../app/sample_data.js";
import { BookModel } from "../db/book-model.js";

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + " - " + Date.now());
  },
});

const upload = multer({ storage: storage });

router.get("/seed", async (req, res) => {
  const bookCount = await BookModel.countDocuments();

  if (bookCount > 0) {
    res.send("Seeded");
  } else {
    // for (let item = 0; item < books.length; item++) {
    //   books[item].image = {
    //     data: fs.readFileSync(
    //       path.join(__dirname, +"/uploads/" + req.file.fieldname, "base64")
    //     ),
    //     contentType: "image/png",
    //   };
    // }

    await BookModel.create(books);
    res.send("Seeded");
  }
});

router.get("/booksList", async (req, res) => {
  let queryString = {};
  if (req.query.q) {
    queryString = { title: req.query.q };
  }
  const books = await BookModel.find(queryString);

  if (!books) {
    res.send("Books data is empty!");
    return;
  }

  res.send(books);
});

router.get("/bookById/:id", async (req, res) => {
  const book = await BookModel.findById({ _id: req.params.id });
  console.log("book ", book);

  res.send(book);
});

export default router;
