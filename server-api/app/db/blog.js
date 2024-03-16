import { Schema, model } from "mongoose";

// Create a basic blog post model
// const Schema = mongoose.Schema;
const blogPostSchema = new Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
});

const BlogPost = model("BlogPost", blogPostSchema);

// Create a new blog post and save it to the database
const newBlogPost = new BlogPost({
  title: "Getting Started with MongoDB and Express.js",
  content:
    "In this blog post, we learned how to set up MongoDB with Express.js...",
});

newBlogPost
  .save()
  .then((post) => console.log("New blog post saved:", post))
  .catch((error) => console.error("Error saving blog post:", error));

module.exports = { BlogPost };
