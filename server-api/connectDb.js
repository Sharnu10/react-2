import mongoose from "mongoose";

const dbUrl = "mongodb://localhost:27017/my_database"; // Replace 'my_database' with your preferred database name.

function mongodbConnect() {
  mongoose
    .connect(dbUrl)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));
}

export default mongodbConnect;
