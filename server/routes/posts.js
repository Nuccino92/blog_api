import express from "express";
import { getPosts_Index, createPost_Post } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts_Index);
router.post("/", createPost_Post);

export default router;
