import express from "express";
import passport from "passport";

import {
  getPosts_Index,
  createPost_Post,
  editPost_Put,
  deletePost_Delete,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts_Index);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createPost_Post
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deletePost_Delete
);
router.put("/:id", editPost_Put);

export default router;
