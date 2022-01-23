import User from "../models/user.js";

export const auth_Get = (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => {
      res.json(user);
    });
};
