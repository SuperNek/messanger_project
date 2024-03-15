import express from "express";
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import jwt from "jsonwebtoken";
import User from "./models/userModel.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./db/connect.js";

dotenv.config()

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();

app.use(express.json()); // for parsing request bodies

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});

