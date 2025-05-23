import Scrap from "../models/scrap.model.js";
export const scrapdetails=async(req,res)=>{
    try {
        const{name,mobile,location,description}=req.body;
        const newscrap=new Scrap({
            name,
            mobile,
            location,
            description
        })
        await newscrap.save();
        res.status(200).json({message:"Scrap updated successfull"})
    } catch (error) {
        console.log(error);
          res.status(500).json({messagee:"Internal Server Error"});
        
    }
}
export const getScrap=async(req,res)=>{
    try{
        const scrapp=await Scrap.find();
        res.status(200).json(scrapp);
    }
    catch(error){
        res.status(500).json({message:"Error in displaying"});
    }
}