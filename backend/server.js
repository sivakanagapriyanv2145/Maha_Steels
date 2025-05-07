const express=require("express");
const dotenv=require("dotenv");
dotenv.config();
const connectDB=require("./db/connectDB.js");
const authRoute=require("./routes/auth.route.js");
const quote=require("./routes/quotation.route.js");
const adminRoute=require("./routes/admin.route.js");
const cors = require('cors');

const app=express();
app.use(cors());
const PORT=process.env.PORT||3001;
app.use(express.json()); 
app.use("/mahalakshmisteels/auth",authRoute)
app.use("/mahalakshmisteels/admin",adminRoute);
app.use("/mahalakshmisteels",quote);
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
    connectDB();
})