import User from "../models/userModel.js";

export const getUsersWithMessages = async (req, res) => {
    try {
        
        const currUserId = req.user._id;

        const allUsers = await User.find({_id: { $ne: currUserId }}).select("-password");

        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({error: "Server error"});
        console.log("Error in getUsersWithMessages controller", error.message);
    }
}