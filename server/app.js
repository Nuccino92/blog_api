import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import passport from "passport";
import cors from "cors";

// imports LocalStrategy/JWTStrategy
import "./config/passport.js";

import postsRoutes from "./routes/posts.js";
import registerRoutes from "./routes/register.js";
import logInRoutes from "./routes/log-in.js";
import authRoutes from "./routes/auth.js";

const app = express();

dotenv.config();
const dbURI = process.env.MONGOOSE_URI;
const PORT = process.env.PORT || 8000;

app.use(passport.initialize());

// handles front end request body
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

app.use("/posts", postsRoutes);
app.use("/register", registerRoutes);
app.use("/log-in", logInRoutes);
app.use("/auth", authRoutes);
