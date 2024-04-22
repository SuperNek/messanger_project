import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
    try {
        const {firstName, username, password, confirmPassword} = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({error:"Passwords don't match"})
        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error:"User already exists"})
        }

        // Hash password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user

        const defaultProfilePic = 'https://img.freepik.com/free-photo/user-profile-front-side_187299-39595.jpg';
        
        const newUser = new User({
            firstName,
            username,
            password: hashedPassword,
            profilePicture: defaultProfilePic
        })

        await newUser.save();

        if(newUser){
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                firstname: newUser.firstName,
                username: newUser.username,
                profilePicture: newUser.profilePicture
            });
        } else{
            res.status(400).json({error: "Invalid user data"});
        }
    } catch (error) {
        res.status(500).json({error: "Server error"});
        console.log("Error in register controller",error)
    }
}

export const login = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            firstname: user.firstName,
            username: user.username,
            profilePicture: user.profilePicture
        })
    } catch (error){
        res.status(500).json({error: "Server error"});
        console.log("Error in login controller",error.message);
    }
}
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "User logged out"});
    } catch (error) {
        res.status(500).json({error: "Server error"});
        console.log("Error in logout controller",error.message);
    }
}