import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Comment = mongoose.model(
  "Comment",
  new Schema(
    {
      username: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Comment;
