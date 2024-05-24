import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import checkAuth from "../utils/checkAuth.js";

const router = express.Router();

router.post("/send/:id", checkAuth, sendMessage);

router.get("/:id", checkAuth, getMessages);

export default router;