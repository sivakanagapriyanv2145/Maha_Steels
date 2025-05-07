import Quotation from "../models/quotation.model.js";
export const quote=async(req,res)=>{
    try {
        const {name,mobile,projectType,materials,quantity,location,date,notes}=req.body;
        const newQuotation=new Quotation({
            name,
            mobile,
            projectType,
            materials,
            quantity,
            location,
            date,
            notes
        })
        await newQuotation.save();
        res.status (200).json({message:"Quatation Stored Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({messagee:"Internal Server Error"});
    }
}
export const getQuote=async(req,res)=>{
    try {
        const quotations=await Quotation.find();
        res.status(200).json(quotations);
    } catch (error) {
        res.status(500).json({message:"Error in displaying"})
    }
}