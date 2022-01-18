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
        required: true,
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

export default Post;
