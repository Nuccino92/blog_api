import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import passport from "passport";
import cors from "cors";

const app = express();

// handle post bodies
app.use(express.urlencoded({ extended: false }));

app.use(cors());

dotenv.config();
const dbURI = process.env.MONGOOSE_URI;
const PORT = process.env.PORT || 3000;

// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

app.get("/", (req, res) => {
  console.log(db);
});
