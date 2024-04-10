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

export const logout = (req, res) => {
    res.send('Logout')
}

export const login = (req, res) => {
    res.send('Register')
}