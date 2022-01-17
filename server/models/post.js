import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Post = mongoose.model(
  "Post",
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: truee,
      },
      comments: {
        type: Array,
      },
      published: {
        type: Boolean,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Post;
