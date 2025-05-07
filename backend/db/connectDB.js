const mongoose = require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database is connected");
    }
    catch(error){
        console.log(`Error in connecton${error}`);
        process.exit(1);
      }
    }
module.exports=connectDB;