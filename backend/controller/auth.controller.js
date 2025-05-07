import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (!username || username.trim() === "") {
      return res.status(400).json({ error: "Username is required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    generateToken(res, newUser._id);

    res.status(200).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });

  } catch (error) {
    console.error("Error:", error);
    if (!res.headersSent) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

export const login=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const user=await User.findOne({email});
        const isPasswordCorrect=await bcrypt.compare(password,user?.password||""); 
        if(!user||!isPasswordCorrect){
            return res.status(400).json({error:"Invalid password"})
        }
        generateToken(res,user._id);
        res.status(200).json({message:"Login Success"});
    } catch (error) {
        res.status(500).json({error:"Internal server error"});
    }
}
export const logout=async(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logout Success"});
    } catch (error) {
        console.log('Error:',error);
        res.status(500).json({error:"Internal Server Crash"});  
    }
}