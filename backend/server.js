import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import connectDB from "./db/connect.js";

dotenv.config()

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(express.json()); // for parsing request bodies
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
    console.log(process.env.MONGO_URL)
    connectDB();
    console.log(`Server running on port ${PORT}`);
});

