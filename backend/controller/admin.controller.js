import Admin from "../models/admin.modle.js";
import generateToken from "../utils/generateToken.js"; 
import bcrypt from "bcryptjs";
export const alogin=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const existinguser=await Admin.findOne({email});
        const isPassword=await bcrypt.compare(password,existinguser?.password||" ");
        
        if(!existinguser||!isPassword){
            return res.status(400).json({error:"Invalid password"})   
           }
           generateToken(res,existinguser._id);
           res.status(200).json({message:"Login successfully"})
    } catch (error) {
        console.log('Error:',error)
        res.status(500).json({message:"You are not a admin request from the Company"})
    }
}
export const asignup=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const existinguser=await Admin. findOne({email});
        if(existinguser){
            res.status(400).json({message:"User already exists"});
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt); 
        const newAdmin=new Admin({
            email,
            password:hashedPassword
        })
        if(newAdmin){
            generateToken(res,newAdmin._id);
        await newAdmin.save();
    res.status(200).json({message:"Admin created Successfully"})        }
    else{
        res.status(400).json({message:"Internal sever error"})
    }
    } catch (error) {
        res.staus(500).json({message:"Internal Servererror"});
    }
}