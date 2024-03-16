import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import mongodbConnect from "./connectDb.js";
import blogRouter from "./app/routers/blog.js";
import bookRouter from "./app/routers/book-api.js";

const Port = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongodbConnect();

app.use("/api/blog", blogRouter);
app.use("/api/book", bookRouter);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
