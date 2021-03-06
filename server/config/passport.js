import passport from "passport";
import passportLocal from "passport-local";
import passportJWT from "passport-jwt";
import dotenv from "dotenv";

import User from "../models/user.js";

import { compareHash } from "../utils/passwords.js";

const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

dotenv.config();
const secretKey = process.env.JWT_SECRET;

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

// protected requests
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
