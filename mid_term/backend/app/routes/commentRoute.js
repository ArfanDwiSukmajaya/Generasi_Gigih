import express from "express";
const router = express.Router();

import { createCommentController, getCommentByVideoIDController } from "../controllers/commentController.js";

router.post("/comments", createCommentController);
router.get("/comments/:videoID", getCommentByVideoIDController);

export default router;
