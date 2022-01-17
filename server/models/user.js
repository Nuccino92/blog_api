import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new Schema(
    {
      email: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = User;
