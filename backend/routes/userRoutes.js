import express from "express";
import checkAuth from "../utils/checkAuth.js";
import { getUsersWithMessages } from "../controllers/userController.js";

const router = express.Router();

router.get("/", checkAuth, getUsersWithMessages)

export default router;