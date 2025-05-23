import Sell from '../models/Sell.model.js'
export const selllist=async(req,res)=>{
    try {
        const {name,mobile,date,quantity,location}=req.body;
        const newSell=new Sell({
            name,
            mobile,
            date,
            quantity,
            location
        })
        await newSell.save();
        res.status(200).json({message:"Sell data stored"})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Internal Server Error"
        });
        
    }
}
export const getsell=async(req,res)=>{
    try {
        const sells=await Sell.find();
        res.status(200).json(sells);
    } catch (error) {
        res.status(500).json({message:"Error in displaying"})
    }
}