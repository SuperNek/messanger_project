import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const checkAuth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({error: "User not logged in"});
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        if(!verified){
            return res.status(401).json({error: "User not verified"});
        }

        const user = await User.findById(verified.id).select("-password");

        if(!user){
            return res.status(401).json({error: "User not found"});
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({error: "Server error"});
        console.log("Error in checkAuth", error.message);
    }
}

export default checkAuth;