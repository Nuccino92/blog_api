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
        maxlength: 23,
      },
      password: {
        type: String,
        required: true,
        minlength: 6,
      },
    },
    { timestamps: true }
  )
);

export default User;
