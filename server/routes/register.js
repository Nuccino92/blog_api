import express from "express";
import { createUser_Post } from "../controllers/register.js";

const router = express.Router();

router.post("/", createUser_Post);

export default router;
