import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { generateHash } from "../utils/passwords.js";

export const createUser_Post = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({
      message: "Please fill out form",
    });
  }

  try {
    const existingEmail = await User.findOne({
      email: new RegExp("^" + email + "$", "i"),
    });
    const existingUser = await User.findOne({
      username: new RegExp("^" + username + "$", "i"),
    });

    if (existingEmail)
      return res.status(400).json({ message: "Email already taken" });

    if (existingUser)
      return res.status(400).json({ message: "Username already taken" });

    const newUser = new User({
      email,
      username,
      password: generateHash(password),
    });
    await newUser.save().then((user) => {
      jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        // 1 hour
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.status(201).json({
            token,
            user: {
              id: user.id,
              email: user.email,
              username: user.username,
            },
          });
        }
      );
    });
  } catch (err) {
    console.log(err);
  }
};
