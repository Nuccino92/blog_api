import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import passport from "passport";
import cors from "cors";

import postsRoutes from "./routes/posts.js";
import registerRoutes from "./routes/register.js";
import logInRoutes from "./routes/log-in.js";
import authRoutes from "./routes/auth.js";

const app = express();

import passportLocal from "passport-local";
import passportJWT from "passport-jwt";

import User from "./models/user.js";

import { compareHash } from "./utils/passwords.js";

const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

dotenv.config();
const dbURI = process.env.MONGOOSE_URI;
const PORT = process.env.PORT || 8000;
const secretKey = process.env.JWT_SECRET;

app.use(passport.initialize());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email, password, cb) {
      return await User.findOne({ email: new RegExp("^" + email + "$", "i") })
        .then((user) => {
          if (!user) {
            return cb(null, false, {
              message: "Incorrect email or password",
            });
          }
          if (!compareHash(password, user.password)) {
            return cb(null, false, {
              message: "Incorrect email or password",
            });
          }
          return cb(null, user, { message: "Logged In Successfully" });
        })
        .catch((err) => {
          cb(err), console.log(err);
        });
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: secretKey,
    },
    async (jwtPayload, cb) => {
      return await User.findById(jwtPayload.id)
        .then((user) => {
          if (user) {
            return cb(null, user);
          }
          return cb(null, false);
        })
        .catch((err) => console.log(err));
    }
  )
);

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
