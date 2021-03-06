import jwt from "jsonwebtoken";
import passport from "passport";

export const logIn_Post = (req, res, next) => {
  const { email, password } = req.body;

  passport.authenticate("local", { session: false }, (err, user, info) => {
    console.log(user);
    if (err) {
      return res.status(400).json({
        message: "errro here",
      });
    }
    if (!user) {
      return res.status(400).json({
        message: "You entered incorrect information",
        user: user,
      });
    }

    req.login(user, { session: false }, (err) => {
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
  })(req, res, next);
};
