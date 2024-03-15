import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import User from "./models/user.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config()

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;

mongoose.connect(MONGO_URL);

const app = express();

app.get('/', (req, res) => {
    // root route http://localhost:8000
    res.send("Hello World!");
})

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});