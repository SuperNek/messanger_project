import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import User from "./models/user.js";

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

app.get('/test', (req, res) => {
    // test route http://localhost:8000/test
    res.json('test ok');
})

app.post('/register', async (req, res) => {
    // register route http://localhost:8000/register
    const { username, password } = req.body;
    const createdUser = await User.create({ username, password });

    jwt.sign({userId:createdUser._id}, JWT_SECRET,(err, token) => {
        if(err) throw err;
        res.cookie('token', token).status(201).json('created ok');
    });
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});