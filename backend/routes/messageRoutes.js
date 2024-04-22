import express from "express";
import { sendMessage } from "../controllers/messageController.js";
import checkAuth from "../utils/checkAuth.js";

const router = express.Router();

router.post("/send/:id", checkAuth, sendMessage);

export default router;