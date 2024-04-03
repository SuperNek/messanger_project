import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./db/connect.js";

dotenv.config()

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(express.json()); // for parsing request bodies

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(process.env.MONGO_URL)
    connectDB();
    console.log(`Server running on port ${PORT}`);
});

